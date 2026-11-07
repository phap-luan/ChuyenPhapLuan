/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-025",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-025.mp3)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)]</td><td id=\"m_audio_1\">[(yi3)(jing1)]</td><td id=\"m_audio_2\">[(xiu1)]</td><td id=\"m_audio_3\">[(bu4)(liao3)]</td><td id=\"m_audio_4\">[(le)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha-)</td><td id=\"m_yueyin_1\">(ỷ ching-)</td><td id=\"m_yueyin_2\">(xi:âu-)</td><td id=\"m_yueyin_3\">(pu`)(li:ảo)</td><td id=\"m_yueyin_4\">(lơ)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他</td><td id=\"m_hanzi_1\">已經</td><td id=\"m_hanzi_2\">修</td><td id=\"m_hanzi_3\">不了</td><td id=\"m_hanzi_4\">了</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tā</td><td id=\"m_pinyin_1\">yǐjīng</td><td id=\"m_pinyin_2\">xiū</td><td id=\"m_pinyin_3\">bù liǎo</td><td id=\"m_pinyin_4\">le</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">anh ta</td><td id=\"m_nghia_1\">đã</td><td id=\"m_nghia_2\">tu</td><td id=\"m_nghia_3\">không nổi</td><td id=\"m_nghia_4\">rồi</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>anh ta đã tu không nổi rồi.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">họ đã không [thể] tu được nữa rồi.</span></p>\n      </div>",
    tableData: [{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"anh ta"},{"hanzi":"已經","audio":"[(yi3)(jing1)]","pinyin":"yǐjīng","yueyin":"(ỷ ching-)","nghia":"đã"},{"hanzi":"修","audio":"[(xiu1)]","pinyin":"xiū","yueyin":"(xi:âu-)","nghia":"tu"},{"hanzi":"不了","audio":"[(bu4)(liao3)]","pinyin":"bù liǎo","yueyin":"(pu`)(li:ảo)","nghia":"không nổi (bổ ngữ khả năng)"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"rồi, đâu.....trợ từ ngữ khí"}]
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