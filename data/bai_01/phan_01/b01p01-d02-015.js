/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-015",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-015)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dang1)(ran2)]</td><td id=\"m_audio_1\">[(wo3)(men)]</td><td id=\"m_audio_2\">[(jiang3)]</td><td id=\"m_audio_3\">[(yuan2)(fen4)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tang- rán)</td><td id=\"m_yueyin_1\">(gủa mân)</td><td id=\"m_yueyin_2\">(chi:ảng)</td><td id=\"m_yueyin_3\">(doán fân`)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">當然</td><td id=\"m_hanzi_1\">我們</td><td id=\"m_hanzi_2\">講</td><td id=\"m_hanzi_3\">緣份</td><td id=\"m_hanzi_4\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dāngrán</td><td id=\"m_pinyin_1\">wǒmen</td><td id=\"m_pinyin_2\">jiǎng</td><td id=\"m_pinyin_3\">yuánfèn</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đương nhiên</td><td id=\"m_nghia_1\">chúng tôi</td><td id=\"m_nghia_2\">giảng</td><td id=\"m_nghia_3\">duyên phận</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>đương nhiên chúng tôi giảng duyên phận,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tất nhiên chúng tôi nói về duyên phận;</span></p>\n      </div>",
    tableData: [{"hanzi":"當然","audio":"[(dang1)(ran2)]","pinyin":"dāngrán","yueyin":"(tang- rán)","nghia":"đương nhiên"},{"hanzi":"我們","audio":"[(wo3)(men)]","pinyin":"wǒmen","yueyin":"(gủa mân)","nghia":"chúng tôi"},{"hanzi":"講","audio":"[(jiang3)]","pinyin":"jiǎng","yueyin":"(chi:ảng)","nghia":"giảng"},{"hanzi":"緣份","audio":"[(yuan2)(fen4)]","pinyin":"yuánfèn","yueyin":"(doán fân`)","nghia":"duyên phận"}]
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