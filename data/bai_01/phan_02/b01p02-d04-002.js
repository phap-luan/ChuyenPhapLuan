/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d04-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d04-002)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(chan2)(zong1)]</td><td id=\"m_audio_1\">[(you4)]</td><td id=\"m_audio_2\">[(li2)(jie3)(wei2)]</td><td id=\"m_audio_3\">[(wu2)(fa3)(ke2)(jiang3)]</td><td id=\"m_audio_4\">[(le)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tr'án zung-)</td><td id=\"m_yueyin_1\">(yâu`)</td><td id=\"m_yueyin_2\">(lí chi:ể)(guấy)</td><td id=\"m_yueyin_3\">(ú)(fả)(khứa)(chi:ảng)</td><td id=\"m_yueyin_4\">(lơ)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">禪宗</td><td id=\"m_hanzi_1\">又</td><td id=\"m_hanzi_2\">理解為</td><td id=\"m_hanzi_3\">無法可講</td><td id=\"m_hanzi_4\">了</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">chánzōng</td><td id=\"m_pinyin_1\">yòu</td><td id=\"m_pinyin_2\">lǐjiě wéi</td><td id=\"m_pinyin_3\">wú fǎ kě jiǎng</td><td id=\"m_pinyin_4\">le</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">thiền tông</td><td id=\"m_nghia_1\">lại</td><td id=\"m_nghia_2\">lý giải thành</td><td id=\"m_nghia_3\">vô Pháp để giảng</td><td id=\"m_nghia_4\">rồi</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>thiền tông lại lý giải thành vô Pháp để giảng rồi.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Thiền tông lại lý giải rằng không Pháp có thể giảng.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"禪宗","audio":"[(chan2)(zong1)]","pinyin":"chánzōng","yueyin":"(tr'án zung-)","nghia":"thiền tông"},{"hanzi":"又","audio":"[(you4)]","pinyin":"yòu","yueyin":"(yâu`)","nghia":"lại"},{"hanzi":"理解為","audio":"[(li2)(jie3)(wei2)]","pinyin":"lǐjiě wéi","yueyin":"(lí chi:ể)(guấy)","nghia":"lý giải thành"},{"hanzi":"無法可講","audio":"[(wu2)(fa3)(ke2)(jiang3)]","pinyin":"wú fǎ kě jiǎng","yueyin":"(ú)(fả)(khứa)(chi:ảng)","nghia":"vô Pháp để giảng"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"trợ từ ngữ khí"}]
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