/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-023",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-023)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)]</td><td id=\"m_audio_1\">[(xiu1)]</td><td id=\"m_audio_2\">[(zhe4)(ge)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(na4)(ge)]</td><td id=\"m_audio_5\">[(gan1)(rao3)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha-)</td><td id=\"m_yueyin_1\">(xi:âu-)</td><td id=\"m_yueyin_2\">(trưa` cưa)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(na` cưa)</td><td id=\"m_yueyin_5\">(can- rảo)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他</td><td id=\"m_hanzi_1\">修</td><td id=\"m_hanzi_2\">這個</td><td id=\"m_hanzi_3\">，</td><td id=\"m_hanzi_4\">那個</td><td id=\"m_hanzi_5\">干擾</td><td id=\"m_hanzi_6\">；</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tā</td><td id=\"m_pinyin_1\">xiū</td><td id=\"m_pinyin_2\">zhège</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">nàge</td><td id=\"m_pinyin_5\">gānrǎo</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">anh ta</td><td id=\"m_nghia_1\">tu</td><td id=\"m_nghia_2\">cái này</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">cái kia</td><td id=\"m_nghia_5\">can nhiễu</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>anh ta tu cái này, cái kia can nhiễu;</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">họ tu cái này, cái kia can nhiễu;</span></p>\n      </div>",
    tableData: [{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"anh ta"},{"hanzi":"修","audio":"[(xiu1)]","pinyin":"xiū","yueyin":"(xi:âu-)","nghia":"tu"},{"hanzi":"這個","audio":"[(zhe4)(ge)]","pinyin":"zhège","yueyin":"(trưa` cưa)","nghia":"cái này"},{"hanzi":"那個","audio":"[(na4)(ge)]","pinyin":"nàge","yueyin":"(na` cưa)","nghia":"cái kia"},{"hanzi":"干擾","audio":"[(gan1)(rao3)]","pinyin":"gānrǎo","yueyin":"(can- rảo)","nghia":"can nhiễu"}]
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