/* popup.js - Quản lý Popup & Phát âm thanh Pinyin liên tiếp với Fallback 3 Thư mục */

// Lưu thông tin đường dẫn bài/phần hiện tại để phát audio fallback
let currentPathInfo = null;

/**
 * Hàm hỗ trợ phát lần lượt danh sách file âm thanh MP3 (Thử qua 3 thư mục)
 */
function playAudioSequence(audioList) {
    if (!audioList || audioList.length === 0) return;

    let currentIndex = 0;
    const audioPlayer = new Audio();

    function playSound(soundName) {
        // Danh sách 3 thư mục tìm kiếm audio theo thứ tự ưu tiên
        const paths = [
            `audiopinyin/${soundName}.mp3`,
            `audiopinyin/audio2/${soundName}.mp3`
        ];

        // Nếu có thông tin bài/phần thì thêm đường dẫn thứ 3
        if (currentPathInfo) {
            paths.push(`data/bai_${currentPathInfo.bai}/phan_${currentPathInfo.phan}/${soundName}.mp3`);
        }

        let pathIndex = 0;

        function tryNextPath() {
            if (pathIndex < paths.length) {
                audioPlayer.src = paths[pathIndex];
                
                audioPlayer.onended = function() {
                    currentIndex++;
                    if (currentIndex < audioList.length) {
                        playSound(audioList[currentIndex]);
                    }
                };

                audioPlayer.onerror = function() {
                    pathIndex++;
                    tryNextPath(); // Thử đường dẫn tiếp theo nếu lỗi
                };

                audioPlayer.play().catch(err => {
                    pathIndex++;
                    tryNextPath();
                });
            } else {
                console.warn(`Không tìm thấy file âm thanh: ${soundName} ở cả 3 thư mục.`);
                currentIndex++;
                if (currentIndex < audioList.length) {
                    playSound(audioList[currentIndex]);
                }
            }
        }

        tryNextPath();
    }

    playSound(audioList[0]);
}

/**
 * Chuyển đổi văn bản dạng [(sound1)(sound2)] thành nút Loa HTML
 */
function parseAudioToButton(rawAudioStr) {
    if (!rawAudioStr) return '';
    
    if (rawAudioStr.includes('[(') && rawAudioStr.includes(')]')) {
        const matches = rawAudioStr.match(/\(([^)]+)\)/g);
        if (matches) {
            const soundList = matches.map(m => m.replace(/[()]/g, ''));
            const soundJsonStr = JSON.stringify(soundList).replace(/"/g, '&quot;');
            
            return `<button class="btn-play-audio" style="cursor:pointer; background:transparent; border:none; font-size:13px;" onclick="playAudioSequence(${soundJsonStr})" title="Phát âm thanh: ${soundList.join(' ')}">🔊</button>`;
        }
    }
    return rawAudioStr;
}

/**
 * Tách id dạng "b01p01-d01-001" để lấy thông tin Bài và Phần
 */
function getPathFromCauId(cauId) {
    if (!cauId) return null;
    const match = cauId.match(/^b(\d+)p(\d+)/i);
    if (match) {
        return {
            bai: match[1],
            phan: match[2]
        };
    }
    return null;
}

/**
 * Mở Popup và nạp nội dung file JS
 */
function openExplanation(sentenceObj) {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');

    if (!modalOverlay || !modalContent) return;

    const cauId = sentenceObj.id || sentenceObj.cau_id;

    if (modalTitle) {
        modalTitle.textContent = `Chi Tiết Câu: ${cauId || ''}`;
    }

    modalContent.innerHTML = `
        <div style="text-align: center; padding: 15px; color: #666;">
            ⏳ Đang tải nội dung <b>${cauId}.js</b>...
        </div>
    `;
    modalOverlay.classList.add('active');

    if (!cauId) {
        modalContent.innerHTML = `<div style="color: red;">Không tìm thấy mã ID của câu!</div>`;
        return;
    }

    currentPathInfo = getPathFromCauId(cauId);
    if (!currentPathInfo) {
        modalContent.innerHTML = `<div style="color: red;">Định dạng ID (${cauId}) không hợp lệ!</div>`;
        return;
    }

    const jsPath = `data/bai_${currentPathInfo.bai}/phan_${currentPathInfo.phan}/${cauId}.js`;

    modalContent.innerHTML = `
        <div id="rendered-editor" style="margin-bottom: 15px;"></div>
        <div id="rendered-table" class="custom-table-container"></div>
    `;

    const oldScript = document.getElementById('dynamic-popup-content-script');
    if (oldScript) oldScript.remove();

    window.RENDER_PAYLOAD = null;
    window.renderContent = null;

    const script = document.createElement('script');
    script.id = 'dynamic-popup-content-script';
    script.src = jsPath;

    script.onload = function() {
        if (typeof window.renderContent === 'function') {
            renderContentWithAudio("rendered-editor", "rendered-table");
        } else {
            modalContent.innerHTML = `<div style="color: red;">File ${cauId}.js không chứa hàm renderContent() hợp lệ!</div>`;
        }
    };

    script.onerror = function() {
        modalContent.innerHTML = `
            <div style="color: #ef4444; padding: 10px; border: 1px dashed #ef4444; border-radius: 4px;">
                ❌ Không thể nạp file nội dung: <b>${jsPath}</b>
            </div>
        `;
    };

    document.head.appendChild(script);
}

/**
 * Hàm render nội dung và TÙY CHỈNH KÍCH THƯỚC / KHOẢNG CÁCH BẢNG
 */
function renderContentWithAudio(targetEditorId, targetTableId) {
    if (!window.RENDER_PAYLOAD) return;

    // 1. Render Bảng Ma trận (Bảng 1)
    if (targetEditorId) {
        const editorEl = document.getElementById(targetEditorId);
        if (editorEl) {
            let htmlContent = window.RENDER_PAYLOAD.editorHtml || '';

            htmlContent = htmlContent.replace(/\[\((.*?)\)\]/g, function(match) {
                return parseAudioToButton(match);
            });

            if (window.RENDER_PAYLOAD.tableData && Array.isArray(window.RENDER_PAYLOAD.tableData)) {
                let fullSentenceAudio = [];
                window.RENDER_PAYLOAD.tableData.forEach(item => {
                    if (item.audio) {
                        const matches = item.audio.match(/\(([^)]+)\)/g);
                        if (matches) {
                            matches.forEach(m => fullSentenceAudio.push(m.replace(/[()]/g, '')));
                        }
                    }
                });

                if (fullSentenceAudio.length > 0) {
                    const fullSoundJson = JSON.stringify(fullSentenceAudio).replace(/"/g, '&quot;');
                    const fullAudioBtn = `<button class="btn-play-audio" style="cursor:pointer; background:transparent; border:none; font-size:15px;" onclick="playAudioSequence(${fullSoundJson})" title="Phát toàn bộ câu">🔊</button>`;
                    htmlContent = htmlContent.replace(/\[\(\.mp3\)]/g, fullAudioBtn);
                }
            }

            editorEl.innerHTML = htmlContent;
        }
    }

   // 2. Render Bảng Chi Tiết 3 Cột
    if (targetTableId) {
        const tableEl = document.getElementById(targetTableId);
        if (tableEl && window.RENDER_PAYLOAD.tableData) {
            
            // --- THÔNG SỐ ĐIỀU CHỈNH KÍCH THƯỚC & KHOẢNG CÁCH ---
            const STYLES = {
                cellPadding: "3px 6px",       // Đệm ô (trên/dưới - trái/phải)
                hanziSize: "30px",            // Cỡ chữ Hanzi
                pinyinSize: "13px",           // Cỡ chữ Pinyin
                yueyinSize: "11px",           // Cỡ chữ Yueyin
                nghiaSize: "13px",            // Cỡ chữ Nghĩa
                thPadding: "6px 8px",         // Đệm tiêu đề
                thFontSize: "13px"            // Cỡ chữ tiêu đề
            };

            let html = `<table border="1" style="border-collapse: collapse; width: 100%; text-align: center; table-layout: auto;">`;
            
            // Cột 1 & 2 dùng width: 1% + white-space: nowrap để tự co vừa khít chữ. Cột 3 width: auto để chiếm hết phần dư.
            html += `<thead><tr style="background-color: rgba(140, 45, 25, 0.15); font-weight: bold; color: #5c2419; font-size: ${STYLES.thFontSize};">` +
                    `<th style="padding: ${STYLES.thPadding}; width: 1%; white-space: nowrap;">Hanzi</th>` +
                    `<th style="padding: ${STYLES.thPadding}; width: 1%; white-space: nowrap;">Pinyin</th>` +
                    `<th style="padding: ${STYLES.thPadding}; width: auto;">Nghĩa</th>` +
                    `</tr></thead><tbody>`;

            window.RENDER_PAYLOAD.tableData.forEach(function(item) {
                const audioBtnHtml = parseAudioToButton(item.audio || '');
                const hanziColor = item.color ? `color: ${item.color};` : 'color: inherit;';

                html += `<tr>
                    <!-- Cột 1: Hanzi + Audio (Co vừa ký tự, không xuống dòng) -->
                    <td style="padding: ${STYLES.cellPadding}; vertical-align: middle; white-space: nowrap;">
                        <div style="font-family: 'Kaiti SC', 'STKaiti', 'KaiTi', 'SimKai', serif; font-size: ${STYLES.hanziSize}; font-weight: bold; line-height: 1.1; ${hanziColor}">
                            ${item.hanzi || ''}
                        </div>
                        ${audioBtnHtml ? `<div style="margin-top: 1px; line-height: 1;">${audioBtnHtml}</div>` : ''}
                    </td>

                    <!-- Cột 2: Pinyin + Yueyin (Co vừa ký tự, không xuống dòng) -->
                    <td style="padding: ${STYLES.cellPadding}; vertical-align: middle; white-space: nowrap;">
                        <div style="font-size: ${STYLES.pinyinSize}; font-weight: bold; color: #0369a1; line-height: 1.2;">
                            ${item.pinyin || ''}
                        </div>
                        ${item.yueyin ? `
                        <div style="font-size: ${STYLES.yueyinSize}; color: #6b21a8; margin-top: 1px; line-height: 1.1;">
                            ${item.yueyin}
                        </div>` : ''}
                    </td>

                    <!-- Cột 3: Nghĩa (Tự dãn phần còn lại + Được phép xuống dòng) -->
                    <td style="padding: ${STYLES.cellPadding}; text-align: left; vertical-align: middle; font-size: ${STYLES.nghiaSize}; line-height: 1.1; word-break: break-word;">
                        ${item.nghia || ''}
                    </td>
                </tr>`;
            });

            html += '</tbody></table>';
            tableEl.innerHTML = html;
        }
    }
}

// Xử lý đóng Modal
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
            if (modalOverlay) modalOverlay.classList.remove('active');
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
});
