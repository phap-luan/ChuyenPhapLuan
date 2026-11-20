/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-018",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-018)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(shi4)(jia1)(mou2)(ni2)(jiang3)(de)]</td><td id=\"m_audio_1\">[(fa3)(wu2)(ding4)(fa3)(de)]</td><td id=\"m_audio_2\">[(zhen1)(zheng4)(han2)(yi4)]</td><td id=\"m_audio_3\">[(shi4)(shen2)(me)(ne)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shi*` chi:a-)(mấu ní)(chi:ảng)(tơ)</td><td id=\"m_yueyin_1\">(fả)(ú)(ting`)(fả)(tơ)</td><td id=\"m_yueyin_2\">(trân- trâng`)(hán y`)</td><td id=\"m_yueyin_3\">(shi*`)(shấn mơ)(nưa)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">釋迦牟尼講的</td><td id=\"m_hanzi_1\">\"法無定法\"<font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_2\">真正涵義</td><td id=\"m_hanzi_3\">是<font color=\"#a855f7\">甚麼</font>呢</td><td id=\"m_hanzi_4\">?</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shìjiā móuní jiǎng de</td><td id=\"m_pinyin_1\">fǎ wú dìng fǎ de</td><td id=\"m_pinyin_2\">zhēnzhèng hányì</td><td id=\"m_pinyin_3\">shì shénme ne</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">Thích Ca Mâu Ni giảng về</td><td id=\"m_nghia_1\">\"Pháp vô định pháp\" (de)</td><td id=\"m_nghia_2\">chân chính hàm nghĩa</td><td id=\"m_nghia_3\">là gì vậy</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">Thích Ca Mâu Ni giảng về \"Pháp vô định pháp\" </font><font color=\"#3b82f6\" style=\"\"><i style=\"\">(de)</i></font><font color=\"#000000\" style=\"font-weight: bold;\"> chân chính hàm nghĩa là </font><font color=\"#a855f7\" style=\"font-weight: bold;\">gì</font><font color=\"#000000\" style=\"font-weight: bold;\"> vậy?</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Hàm nghĩa chân chính của lời giảng “Pháp vô định Pháp” của Thích Ca Mâu Ni là gì?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"釋迦牟尼講的","audio":"[(shi4)(jia1)(mou2)(ni2)(jiang3)(de)]","pinyin":"shìjiā móuní jiǎng de","yueyin":"(shi*` chi:a-)(mấu ní)(chi:ảng)(tơ)","nghia":"Thích Ca Mâu Ni giảng về"},{"hanzi":"\"法無定法\"的","audio":"[(fa3)(wu2)(ding4)(fa3)(de)]","pinyin":"fǎ wú dìng fǎ de","yueyin":"(fả)(ú)(ting`)(fả)(tơ)","nghia":"\"Pháp vô định pháp\" (de)"},{"hanzi":"真正涵義","audio":"[(zhen1)(zheng4)(han2)(yi4)]","pinyin":"zhēnzhèng hányì","yueyin":"(trân- trâng`)(hán y`)","nghia":"chân chính hàm nghĩa"},{"hanzi":"是甚麼呢","audio":"[(shi4)(shen2)(me)(ne)]","pinyin":"shì shénme ne","yueyin":"(shi*`)(shấn mơ)(nưa)","nghia":"là gì vậy"}]
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