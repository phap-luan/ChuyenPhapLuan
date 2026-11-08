/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-006)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(bao4zhe)]</td><td id=\"m_audio_1\">[(lai2)]</td><td id=\"m_audio_2\">[(qiu2)]</td><td id=\"m_audio_3\">[(gong1)(neng2)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(lai2)]</td><td id=\"m_audio_6\">[(zhi4)(bing4)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(pao` trơ)</td><td id=\"m_yueyin_1\">(lái)</td><td id=\"m_yueyin_2\">(ch'i:ấu)</td><td id=\"m_yueyin_3\">(cung- nấng)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(lái)</td><td id=\"m_yueyin_6\">(tri*` ping`)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">抱著</td><td id=\"m_hanzi_1\">來</td><td id=\"m_hanzi_2\">求</td><td id=\"m_hanzi_3\">功能</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">來</td><td id=\"m_hanzi_6\">治病</td><td id=\"m_hanzi_7\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">bàozhe</td><td id=\"m_pinyin_1\">lái</td><td id=\"m_pinyin_2\">qiú</td><td id=\"m_pinyin_3\">gōngnéng</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">lái</td><td id=\"m_pinyin_6\">zhìbìng</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">ôm</td><td id=\"m_nghia_1\">đến</td><td id=\"m_nghia_2\">cầu</td><td id=\"m_nghia_3\">công năng</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">đến</td><td id=\"m_nghia_6\">trị bệnh</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>ôm đến cầu công năng, đến trị bệnh,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">đến cầu công năng, đến trị bệnh,</span></p>\n      </div>",
    tableData: [{"hanzi":"抱著","audio":"[(bao4zhe)]","pinyin":"bàozhe","yueyin":"(pao` trơ)","nghia":"ôm, mang (著:nhấn mạnh)"},{"hanzi":"來","audio":"[(lai2)]","pinyin":"lái","yueyin":"(lái)","nghia":"đến (để làm gì)"},{"hanzi":"求","audio":"[(qiu2)]","pinyin":"qiú","yueyin":"(ch'i:ấu)","nghia":"cầu, xin, mong được"},{"hanzi":"功能","audio":"[(gong1)(neng2)]","pinyin":"gōngnéng","yueyin":"(cung- nấng)","nghia":"công năng"},{"hanzi":"來","audio":"[(lai2)]","pinyin":"lái","yueyin":"(lái)","nghia":"đến (để làm gì)"},{"hanzi":"治病","audio":"[(zhi4)(bing4)]","pinyin":"zhìbìng","yueyin":"(tri*` ping`)","nghia":"trị bệnh, chữa bệnh"}]
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