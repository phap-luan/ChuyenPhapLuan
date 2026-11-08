/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-002)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ben3)(zhe)]</td><td id=\"m_audio_1\">[(dui4)]</td><td id=\"m_audio_2\">[(she4)(hui4)]</td><td id=\"m_audio_3\"><span style=\"text-align: left;\">[(fu4)(ze2)]</span></td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(dui4)]</td><td id=\"m_audio_6\">[(xue2)(yuan2)]</td><td id=\"m_audio_7\"><span style=\"text-align: left;\">[(fu4)(ze2)]</span></td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(pẩn trơ)</td><td id=\"m_yueyin_1\">(tuây`)</td><td id=\"m_yueyin_2\">(shưa` huây`)</td><td id=\"m_yueyin_3\">(fu` zứa)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(tuây`)</td><td id=\"m_yueyin_6\">(xuế doán)</td><td id=\"m_yueyin_7\">(fu` zứa)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">本著</td><td id=\"m_hanzi_1\">對</td><td id=\"m_hanzi_2\">社會</td><td id=\"m_hanzi_3\">負責</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">對</td><td id=\"m_hanzi_6\">學員</td><td id=\"m_hanzi_7\">負責</td><td id=\"m_hanzi_8\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">běnzhe</td><td id=\"m_pinyin_1\">duì</td><td id=\"m_pinyin_2\">shèhuì</td><td id=\"m_pinyin_3\">fùzé</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">duì</td><td id=\"m_pinyin_6\">xuéyuán</td><td id=\"m_pinyin_7\">fùzé</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">bổn ý</td><td id=\"m_nghia_1\">đối với</td><td id=\"m_nghia_2\">xã hội</td><td id=\"m_nghia_3\">chịu trách nhiệm</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">đối với</td><td id=\"m_nghia_6\">học viên</td><td id=\"m_nghia_7\">chịu trách nhiệm</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>bổn ý đối với xã hội chịu trách nhiệm, đối với học viên chịu trách nhiệm,&nbsp;</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">tôi có bổn ý là có trách nhiệm với xã hội, có trách nhiệm với học viên;</span></p>\n      </div>",
    tableData: [{"hanzi":"本著","audio":"[(ben3)(zhe)]","pinyin":"běnzhe","yueyin":"(pẩn trơ)","nghia":"bổn ý, dựa trên, trên tinh thần"},{"hanzi":"對...負責","audio":"[(dui4)(fu4)(ze2)]","pinyin":"duì…fùzé","yueyin":"(tuây`)...(fu` zứa)","nghia":"đối với...chịu trách nhiệm"},{"hanzi":"社會","audio":"[(she4)(hui4)]","pinyin":"shèhuì","yueyin":"(shưa` huây`)","nghia":"xã hội"},{"hanzi":"學員","audio":"[(xue2)(yuan2)]","pinyin":"xuéyuán","yueyin":"(xuế doán)","nghia":"học viên"}]
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