/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d05-011",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d05-011)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ru2)(guo3)]</td><td id=\"m_audio_1\">[(neng2)(gou4)]</td><td id=\"m_audio_2\">[(zhen1)(zheng4)]</td><td id=\"m_audio_3\">[(ba3)]</td><td id=\"m_audio_4\">[(yi2)(ge4)]</td><td id=\"m_audio_5\">[(chang2)(ren2)]</td><td id=\"m_audio_6\">[(de)]</td><td id=\"m_audio_7\">[(bing4)]</td><td id=\"m_audio_8\">[(gen1)(chu2)]</td><td id=\"m_audio_9\">[(le)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(rú của)</td><td id=\"m_yueyin_1\">(nấng câu`)</td><td id=\"m_yueyin_2\">(trân- trâng`)</td><td id=\"m_yueyin_3\">(pả)</td><td id=\"m_yueyin_4\">(ý)(cưa`)</td><td id=\"m_yueyin_5\">(tr'áng rấn)</td><td id=\"m_yueyin_6\">(tơ)</td><td id=\"m_yueyin_7\">(ping`)</td><td id=\"m_yueyin_8\">(cân- tr'ú)</td><td id=\"m_yueyin_9\">(lơ)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">如果</td><td id=\"m_hanzi_1\">能夠</td><td id=\"m_hanzi_2\">真正</td><td id=\"m_hanzi_3\">把</td><td id=\"m_hanzi_4\">一個</td><td id=\"m_hanzi_5\">常人</td><td id=\"m_hanzi_6\"><font color=\"#f97316\">的</font></td><td id=\"m_hanzi_7\">病</td><td id=\"m_hanzi_8\">根除</td><td id=\"m_hanzi_9\"><font color=\"#3b82f6\">了</font></td><td id=\"m_hanzi_10\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">rúguǒ</td><td id=\"m_pinyin_1\">nénggòu</td><td id=\"m_pinyin_2\">zhēnzhèng</td><td id=\"m_pinyin_3\">bǎ</td><td id=\"m_pinyin_4\">yí gè</td><td id=\"m_pinyin_5\">chángrén</td><td id=\"m_pinyin_6\">de</td><td id=\"m_pinyin_7\">bìng</td><td id=\"m_pinyin_8\">gēnchú</td><td id=\"m_pinyin_9\">le</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nếu</td><td id=\"m_nghia_1\">có thể</td><td id=\"m_nghia_2\">thật sự</td><td id=\"m_nghia_3\">đem</td><td id=\"m_nghia_4\">một</td><td id=\"m_nghia_5\">người thường</td><td id=\"m_nghia_6\">về</td><td id=\"m_nghia_7\">bệnh</td><td id=\"m_nghia_8\">căn trừ</td><td id=\"m_nghia_9\">hết</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">nếu có thể thật sự đem một người thường </font><font color=\"#f97316\">về</font><font color=\"#000000\"> bệnh căn trừ </font><font color=\"#3b82f6\">hết</font><font color=\"#000000\">,</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Nếu như có thể thật sự trị tận gốc bệnh cho một người thường,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"如果","audio":"[(ru2)(guo3)]","pinyin":"rúguǒ","yueyin":"(rú của)","nghia":"nếu"},{"hanzi":"能夠","audio":"[(neng2)(gou4)]","pinyin":"nénggòu","yueyin":"(nấng câu`)","nghia":"có thể"},{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"thật sự"},{"hanzi":"把","audio":"[(ba3)]","pinyin":"bǎ","yueyin":"(pả)","nghia":"đem, mang"},{"hanzi":"一個","audio":"[(yi2)(ge4)]","pinyin":"yí gè","yueyin":"(ý)(cưa`)","nghia":"một (người)"},{"hanzi":"常人","audio":"[(chang2)(ren2)]","pinyin":"chángrén","yueyin":"(tr'áng rấn)","nghia":"người thường"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ sở hữu"},{"hanzi":"病","audio":"[(bing4)]","pinyin":"bìng","yueyin":"(ping`)","nghia":"bệnh"},{"hanzi":"根除","audio":"[(gen1)(chu2)]","pinyin":"gēnchú","yueyin":"(cân- tr'ú)","nghia":"căn trừ, trừ tận gốc"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"rồi: trợ từ hoàn thành"}]
  };

  window.renderContent = function(targetEditorId, targetTableId) {
    if (targetEditorId) {
      var editorEl = document.getElementById(targetEditorId);
      if (editorEl) editorEl.innerHTML = window.RENDER_PAYLOAD.editorHtml;
    }
    
    if (targetTableId) {
      var tableEl = document.getElementById(targetTableId);
      if (tableEl) {
        var html = '<table border="1" style="border-collapse: collapse; width: 100%;">';
        html += '<thead><tr><th>Hanzi</th><th>Audio</th><th>Pinyin</th><th>Yueyin</th><th>Nghĩa</th></tr></thead><tbody>';
        window.RENDER_PAYLOAD.tableData.forEach(function(item) {
          html += '<tr><td>' + item.hanzi + '</td><td>' + item.audio + '</td><td>' + item.pinyin + '</td><td>' + item.yueyin + '</td><td>' + item.nghia + '</td></tr>';
        });
        html += '</tbody></table>';
        tableEl.innerHTML = html;
      }
    }
  };

  document.addEventListener("DOMContentLoaded", function() {
    window.renderContent("rendered-editor", "rendered-table");
  });
})();