/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-002)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(hao3)(de)]</td><td id=\"m_audio_1\">[(liu2)(xia4)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(huai4)(de)]</td><td id=\"m_audio_4\">[(qu4)(diao4)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(hảo)(tơ)</td><td id=\"m_yueyin_1\">(li:ấu xi:a`)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(hoai`)(tơ)</td><td id=\"m_yueyin_4\">(ch'uy` ti:ao`)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">好的</td><td id=\"m_hanzi_1\">留下</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">壞的</td><td id=\"m_hanzi_4\">去掉</td><td id=\"m_hanzi_5\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">hǎo de</td><td id=\"m_pinyin_1\">liúxià</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">huài de</td><td id=\"m_pinyin_4\">qùdiào</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">cái tốt</td><td id=\"m_nghia_1\">lưu lại</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">cái xấu</td><td id=\"m_nghia_4\">bỏ đi</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\">\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">cái tốt lưu lại, cái xấu bỏ đi;</span>\n          <span></span>\n        </p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">cái tốt lưu lại, cái xấu bỏ đi;</span></p>\n      </div>",
    tableData: [{"hanzi":"好的","audio":"[(hao3)(de)]","pinyin":"hǎo de","yueyin":"(hảo)(tơ)","nghia":"cái tốt"},{"hanzi":"留下","audio":"[(liu2)(xia4)]","pinyin":"liúxià","yueyin":"(li:ấu xi:a`)","nghia":"lưu lại, giữ lại"},{"hanzi":"壞的","audio":"[(huai4)(de)]","pinyin":"huài de","yueyin":"(hoai`)(tơ)","nghia":"cái xấu, cái hỏng"},{"hanzi":"去掉","audio":"[(qu4)(diao4)]","pinyin":"qùdiào","yueyin":"(ch'uy` ti:ao`)","nghia":"bỏ đi, loại bỏ"}]
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