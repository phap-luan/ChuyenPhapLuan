/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d06-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d06-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo2)(jiang3)]</td><td id=\"m_audio_1\">[(zhe4)(ge)(fa3)(wu2)(ding4)(fa3)]</td><td id=\"m_audio_2\">[(jiu4)(shi4)]</td><td id=\"m_audio_3\">[(zhe4)(yang4)(yi2)(ge4)(han2)(yi4)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gúa)(chi:ảng)</td><td id=\"m_yueyin_1\">(trưa` cưa)(fả)(ú)(ting`)(fả)</td><td id=\"m_yueyin_2\">(chi:âu`)(shi*`)</td><td id=\"m_yueyin_3\">(trưa` yang`)(ý)(cưa`)(hán y`)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我講</td><td id=\"m_hanzi_1\"><font color=\"#f97316\">這個</font>法無定法</td><td id=\"m_hanzi_2\">就是</td><td id=\"m_hanzi_3\"><font color=\"#ec4899\">這樣</font>一個涵義</td><td id=\"m_hanzi_4\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ jiǎng</td><td id=\"m_pinyin_1\">zhège fǎ wú dìng fǎ</td><td id=\"m_pinyin_2\">jiù shì</td><td id=\"m_pinyin_3\">zhèyàng yí gè hányì</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi giảng</td><td id=\"m_nghia_1\">\"Pháp vô định pháp\"<font color=\"#f97316\"> này</font></td><td id=\"m_nghia_2\">chính là</td><td id=\"m_nghia_3\"><font color=\"#ec4899\">như thế này</font> một hàm nghĩa</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">tôi giảng \"Pháp vô định pháp\" </font><font color=\"#f97316\">này</font><font color=\"#000000\"> chính là </font><font color=\"#ec4899\">như thế này</font><font color=\"#000000\"> một hàm nghĩa.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tôi giảng rằng ‘Pháp vô định Pháp’ chính là có hàm nghĩa như thế.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我講","audio":"[(wo2)(jiang3)]","pinyin":"wǒ jiǎng","yueyin":"(gúa)(chi:ảng)","nghia":"tôi giảng"},{"hanzi":"這個法無定法","audio":"[(zhe4)(ge)(fa3)(wu2)(ding4)(fa3)]","pinyin":"zhège fǎ wú dìng fǎ","yueyin":"(trưa` cưa)(fả)(ú)(ting`)(fả)","nghia":"\"Pháp vô định pháp\" này"},{"hanzi":"就是","audio":"[(jiu4)(shi4)]","pinyin":"jiù shì","yueyin":"(chi:âu`)(shi*`)","nghia":"chính là"},{"hanzi":"這樣一個涵義","audio":"[(zhe4)(yang4)(yi2)(ge4)(han2)(yi4)]","pinyin":"zhèyàng yí gè hányì","yueyin":"(trưa` yang`)(ý)(cưa`)(hán y`)","nghia":"như thế này một hàm nghĩa"}]
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