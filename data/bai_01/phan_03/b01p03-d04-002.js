/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d04-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d04-002)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(shen2)(me)(shi4)(hao3)]</td><td id=\"m_audio_1\">[(shen2)(me)(shi4)(huai4)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(jiu4)(shi4)]</td><td id=\"m_audio_4\">[(yong4)(ta1)]</td><td id=\"m_audio_5\">[(lai2)(heng2)(liang2)(de)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shấn mơ)(shi*`)(hảo)</td><td id=\"m_yueyin_1\">(shấn mơ)(shi*`)(hoai`)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(chi:âu`)(shi*`)</td><td id=\"m_yueyin_4\">(yung`)(tha-)</td><td id=\"m_yueyin_5\">(lái)(hấng li:áng)(tơ)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">甚麼是好</td><td id=\"m_hanzi_1\">甚麼是壞</td><td id=\"m_hanzi_2\">?</td><td id=\"m_hanzi_3\">就是</td><td id=\"m_hanzi_4\">用他</td><td id=\"m_hanzi_5\">來衡量<font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shénme shì hǎo</td><td id=\"m_pinyin_1\">shénme shì huài</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">jiù shì</td><td id=\"m_pinyin_4\">yòng tā</td><td id=\"m_pinyin_5\">lái héngliáng de</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">cái gì là tốt</td><td id=\"m_nghia_1\">cái gì là xấu</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">chính là</td><td id=\"m_nghia_4\">dùng ông</td><td id=\"m_nghia_5\">để đo lường (de)</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">cái gì là tốt cái gì là xấu? chính là dùng ông để đo lường </font><font color=\"#3b82f6\" style=\"\"><i style=\"\">(de)</i></font><font color=\"#000000\" style=\"font-weight: bold;\">.</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Thế nào là tốt, thế nào là xấu? Chính là dùng Nó {Chân-Thiện-Nhẫn} mà xác định.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"甚麼是好","audio":"[(shen2)(me)(shi4)(hao3)]","pinyin":"shénme shì hǎo","yueyin":"(shấn mơ)(shi*`)(hảo)","nghia":"cái gì là tốt"},{"hanzi":"甚麼是壞","audio":"[(shen2)(me)(shi4)(huai4)]","pinyin":"shénme shì huài","yueyin":"(shấn mơ)(shi*`)(hoai`)","nghia":"cái gì là xấu"},{"hanzi":"就是","audio":"[(jiu4)(shi4)]","pinyin":"jiù shì","yueyin":"(chi:âu`)(shi*`)","nghia":"chính là"},{"hanzi":"用他","audio":"[(yong4)(ta1)]","pinyin":"yòng tā","yueyin":"(yung`)(tha-)","nghia":"dùng ông (chỉ Chân, Thiện, Nhẫn)"},{"hanzi":"來衡量的","audio":"[(lai2)(heng2)(liang2)(de)]","pinyin":"lái héngliáng de","yueyin":"(lái)(hấng li:áng)(tơ)","nghia":"để đo lường (de)"}]
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