/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d01-007",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d01-007)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(men)(zen3)(me)(dui4)(dai4)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(zen3)(me)(kan4)(dai4)]</td><td id=\"m_audio_3\">[(zhe4)(xie1)(xian4)(xiang4)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(wo3)(dou1)(yao4)]</td><td id=\"m_audio_6\">[(jiang3)(chu1)(lai2)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa mân)(zẩn mơ)(tuây` tai`)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(zẩn mơ)(khan` tai`)</td><td id=\"m_yueyin_3\">(trưa` xi:ê-)(xi:en` xi:ang`)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(gủa)(tâu-)(yao`)</td><td id=\"m_yueyin_6\">(chi:ảng)(tr'u- lái)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我們怎麼對待</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">怎麼看待</td><td id=\"m_hanzi_3\"><font color=\"#3b82f6\">這</font>些現象</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">我都要</td><td id=\"m_hanzi_6\">講出來</td><td id=\"m_hanzi_7\">；</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒmen zěnme duìdài</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">zěnme kàndài</td><td id=\"m_pinyin_3\">zhèxiē xiànxiàng</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">wǒ dōu yào</td><td id=\"m_pinyin_6\">jiǎng chūlái</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chúng ta thế nào đối đãi</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">thế nào nhìn nhận</td><td id=\"m_nghia_3\">những hiện tượng này</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">tôi đều phải</td><td id=\"m_nghia_6\">giảng xuất ra</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">chúng ta thế nào đối đãi, thế nào nhìn nhận, những hiện tượng </font><font color=\"#3b82f6\">này</font><font color=\"#000000\">, tôi đều phải giảng xuất ra;</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Chúng ta đối đãi, nhìn nhận những hiện tượng ấy như thế nào, tôi đều cần giảng rõ;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我們怎麼對待","audio":"[(wo3)(men)(zen3)(me)(dui4)(dai4)]","pinyin":"wǒmen zěnme duìdài","yueyin":"(gủa mân)(zẩn mơ)(tuây` tai`)","nghia":"chúng ta thế nào đối đãi"},{"hanzi":"怎麼看待","audio":"[(zen3)(me)(kan4)(dai4)]","pinyin":"zěnme kàndài","yueyin":"(zẩn mơ)(khan` tai`)","nghia":"thế nào nhìn nhận (看待:khán đãi, nhìn nhận)"},{"hanzi":"這些現象","audio":"[(zhe4)(xie1)(xian4)(xiang4)]","pinyin":"zhèxiē xiànxiàng","yueyin":"(trưa` xi:ê-)(xi:en` xi:ang`)","nghia":"những hiện tượng này"},{"hanzi":"我都要","audio":"[(wo3)(dou1)(yao4)]","pinyin":"wǒ dōu yào","yueyin":"(gủa)(tâu-)(yao`)","nghia":"tôi đều phải"},{"hanzi":"講出來","audio":"[(jiang3)(chu1)(lai2)]","pinyin":"jiǎng chūlái","yueyin":"(chi:ảng)(tr'u- lái)","nghia":"giảng xuất ra"}]
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