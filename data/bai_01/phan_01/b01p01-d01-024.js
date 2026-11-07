/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-024",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-024.mp3)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(xiu1)]</td><td id=\"m_audio_1\">[(na4)(ge)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(zhe4)(ge)]</td><td id=\"m_audio_4\">[(gan1)(rao3)]</td><td id=\"m_audio_5\"></td><td id=\"m_audio_6\">[(dou1)]</td><td id=\"m_audio_7\">[(zai4)]</td><td id=\"m_audio_8\">[(gan1)(rao3)]</td><td id=\"m_audio_9\">[(ta1)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(xi:âu-)</td><td id=\"m_yueyin_1\">(na` cưa)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(trưa` cưa)</td><td id=\"m_yueyin_4\">(can- rảo)</td><td id=\"m_yueyin_5\"></td><td id=\"m_yueyin_6\">(tâu-)</td><td id=\"m_yueyin_7\">(zai`)</td><td id=\"m_yueyin_8\">(can- rảo)</td><td id=\"m_yueyin_9\">(tha-)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">修</td><td id=\"m_hanzi_1\">那個</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">這個</td><td id=\"m_hanzi_4\">干擾</td><td id=\"m_hanzi_5\">,</td><td id=\"m_hanzi_6\">都</td><td id=\"m_hanzi_7\">在</td><td id=\"m_hanzi_8\">干擾</td><td id=\"m_hanzi_9\">他</td><td id=\"m_hanzi_10\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">xiū</td><td id=\"m_pinyin_1\">nàge</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">zhège</td><td id=\"m_pinyin_4\">gānrǎo</td><td id=\"m_pinyin_5\"></td><td id=\"m_pinyin_6\">dōu</td><td id=\"m_pinyin_7\">zài</td><td id=\"m_pinyin_8\">gānrǎo</td><td id=\"m_pinyin_9\">tā</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tu</td><td id=\"m_nghia_1\">cái kia</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">cái này</td><td id=\"m_nghia_4\">can nhiễu</td><td id=\"m_nghia_5\"></td><td id=\"m_nghia_6\">đều</td><td id=\"m_nghia_7\">đang</td><td id=\"m_nghia_8\">can nhiễu</td><td id=\"m_nghia_9\">anh ta</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>tu cái kia, cái này can nhiễu, đều đang can nhiễu anh ta,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">tu cái kia, cái này can nhiễu; đều can nhiễu đến họ,</span></p>\n      </div>",
    tableData: [{"hanzi":"修","audio":"[(xiu1)]","pinyin":"xiū","yueyin":"(xi:âu-)","nghia":"tu"},{"hanzi":"那個","audio":"[(na4)(ge)]","pinyin":"nàge","yueyin":"(na` cưa)","nghia":"cái kia"},{"hanzi":"這個","audio":"[(zhe4)(ge)]","pinyin":"zhège","yueyin":"(trưa` cưa)","nghia":"cái này"},{"hanzi":"干擾","audio":"[(gan1)(rao3)]","pinyin":"gānrǎo","yueyin":"(can- rảo)","nghia":"can nhiễu"},{"hanzi":"都","audio":"[(dou1)]","pinyin":"dōu","yueyin":"(tâu-)","nghia":"đều"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"đang (phó từ tiến hành)"},{"hanzi":"干擾","audio":"[(gan1)(rao3)]","pinyin":"gānrǎo","yueyin":"(can- rảo)","nghia":"can nhiễu"},{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"anh ta"}]
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