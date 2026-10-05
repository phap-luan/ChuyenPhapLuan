/* popup.js - Quản lý Popup & Phát âm thanh Pinyin liên tiếp */

/**
 * Hàm hỗ trợ phát lần lượt danh sách file âm thanh MP3
 * @param {Array<string>} audioList Danh sách tên file mp3 (vd: ['ni2', 'hao3', 'ma'])
 */
function playAudioSequence(audioList) {
    if (!audioList || audioList.length === 0) return;

    let currentIndex = 0;
    const audioPlayer = new Audio();

    function playNext() {
        if (currentIndex < audioList.length) {
            const soundName = audioList[currentIndex];
            // Đường dẫn tới thư mục chứa file âm thanh
            audioPlayer.src = `audiopinyin/${soundName}.mp3`;
            
            // Xử lý khi phát xong file hiện tại thì chuyển sang file kế tiếp
            audioPlayer.onended = function() {
                currentIndex++;
                playNext();
            };

            // Bỏ qua lỗi nếu file mp3 không tồn tại và tiếp tục phát file sau
            audioPlayer.onerror = function() {
                console.warn(`Không tìm thấy file âm thanh: audiopinyin/${soundName}.mp3`);
                currentIndex++;
                playNext();
            };

            audioPlayer.play().catch(err => {
                console.warn("Lỗi phát audio:", err);
                currentIndex++;
                playNext();
            });
        }
    }

    playNext();
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
        <div style="text-align: center; padding: 20px; color: #666;">
            ⏳ Đang tải nội dung <b>${cauId}.js</b>...
        </div>
    `;
    modalOverlay.classList.add('active');

    if (!cauId) {
        modalContent.innerHTML = `<div style="color: red;">Không tìm thấy mã ID của câu!</div>`;
        return;
    }

    const pathInfo = getPathFromCauId(cauId);
    if (!pathInfo) {
        modalContent.innerHTML = `<div style="color: red;">Định dạng ID (${cauId}) không hợp lệ!</div>`;
        return;
    }

    const jsPath = `data/bai_${pathInfo.bai}/phan_${pathInfo.phan}/${cauId}.js`;

    // Tạo sẵn 2 khu vực chứa Rich Text và Bảng
    modalContent.innerHTML = `
        <div id="rendered-editor" style="margin-bottom: 20px;"></div>
        <div id="rendered-table" class="custom-table-container"></div>
    `;

    // Dọn dẹp script popup cũ
    const oldScript = document.getElementById('dynamic-popup-content-script');
    if (oldScript) oldScript.remove();

    window.RENDER_PAYLOAD = null;
    window.renderContent = null;

    // Tải script động
    const script = document.createElement('script');
    script.id = 'dynamic-popup-content-script';
    script.src = jsPath;

    script.onload = function() {
        if (typeof window.renderContent === 'function') {
            // Tự động thay thế hàm renderContent chuẩn của file b01p01-d01-001.js 
            // để hỗ trợ render nút LOA cho cột Audio
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
 * Hàm đè (override) renderContent để xử lý mã audio [(ni2)(hao3)] thành Nút Loa
 */
function renderContentWithAudio(targetEditorId, targetTableId) {
    if (!window.RENDER_PAYLOAD) return;

    // 1. Render Rich Text Editor
    if (targetEditorId) {
        const editorEl = document.getElementById(targetEditorId);
        if (editorEl) editorEl.innerHTML = window.RENDER_PAYLOAD.editorHtml;
    }

    // 2. Render Bảng dữ liệu + Xử lý Audio
    if (targetTableId) {
        const tableEl = document.getElementById(targetTableId);
        if (tableEl && window.RENDER_PAYLOAD.tableData) {
            let html = '<table border="1" style="border-collapse: collapse; width: 100%;">';
            html += '<thead><tr><th>Hanzi</th><th>Audio</th><th>Pinyin</th><th>Nghĩa</th></tr></thead><tbody>';

            window.RENDER_PAYLOAD.tableData.forEach(function(item) {
                let audioCellHtml = item.audio || '';
                
                // Kiểm tra xem dữ liệu audio có dạng [(ni2)(hao3)(ma)] hay không
                if (audioCellHtml.includes('[(') && audioCellHtml.includes(')]')) {
                    // Lấy ra danh sách các âm tiết: ["ni2", "hao3", "ma"]
                    const matches = audioCellHtml.match(/\(([^)]+)\)/g);
                    if (matches) {
                        const soundList = matches.map(m => m.replace(/[()]/g, ''));
                        const soundJsonStr = JSON.stringify(soundList).replace(/"/g, '&quot;');
                        
                        // Biến thành nút biểu tượng loa
                        audioCellHtml = `
                            <button class="btn-play-audio" onclick="playAudioSequence(${soundJsonStr})" title="Phát âm thanh: ${soundList.join(' ')}">
                                🔊
                            </button>
                        `;
                    }
                }

                html += `<tr>
                    <td>${item.hanzi || ''}</td>
                    <td>${audioCellHtml}</td>
                    <td style="white-space: pre-line;">${item.pinyin || ''}</td>
                    <td>${item.nghia || ''}</td>
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