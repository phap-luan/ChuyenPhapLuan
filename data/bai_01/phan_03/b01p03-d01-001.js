/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d01-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d01-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zai4)(fo2)(jiao4)(zhong1)]</td><td id=\"m_audio_1\">[(ren2)(men)]</td><td id=\"m_audio_2\">[(yi4)(zhi2)]</td><td id=\"m_audio_3\">[(zai4)(tan4)(tao3)(zhe)]</td><td id=\"m_audio_4\">[(shen2)(me)(shi4)(fo2)(fa3)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(zai`)(fúa chi:ao`)(trung-)</td><td id=\"m_yueyin_1\">(rấn mân)</td><td id=\"m_yueyin_2\">(y` trí*)</td><td id=\"m_yueyin_3\">(zai`)(than` thảo trơ)</td><td id=\"m_yueyin_4\">(shấn mơ)(shi*`)(fúa fả)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"><font color=\"#3b82f6\">在</font>佛教<font color=\"#3b82f6\">中</font></td><td id=\"m_hanzi_1\">人們</td><td id=\"m_hanzi_2\">一直</td><td id=\"m_hanzi_3\">在探討著</td><td id=\"m_hanzi_4\">甚麼是佛法</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zài fójiào zhōng</td><td id=\"m_pinyin_1\">rénmen</td><td id=\"m_pinyin_2\">yìzhí</td><td id=\"m_pinyin_3\">zài tàntǎozhe</td><td id=\"m_pinyin_4\">shénme shì fófǎ</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">ở trong Phật giáo</td><td id=\"m_nghia_1\">mọi người</td><td id=\"m_nghia_2\">luôn luôn</td><td id=\"m_nghia_3\">đang tìm hiểu</td><td id=\"m_nghia_4\">cái gì là Phật pháp</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#3b82f6\">ở trong </font><font color=\"#000000\">Phật giáo mọi người luôn luôn đang tìm hiểu cái gì là Phật pháp.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Trong Phật giáo người ta luôn tìm hiểu xem Phật Pháp là gì.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"在佛教中","audio":"[(zai4)(fo2)(jiao4)(zhong1)]","pinyin":"zài fójiào zhōng","yueyin":"(zai`)(fúa chi:ao`)(trung-)","nghia":"ở trong Phật giáo"},{"hanzi":"人們","audio":"[(ren2)(men)]","pinyin":"rénmen","yueyin":"(rấn mân)","nghia":"mọi người"},{"hanzi":"一直","audio":"[(yi4)(zhi2)]","pinyin":"yìzhí","yueyin":"(y` trí*)","nghia":"luôn luôn"},{"hanzi":"在探討著","audio":"[(zai4)(tan4)(tao3)(zhe)]","pinyin":"zài tàntǎozhe","yueyin":"(zai`)(than` thảo trơ)","nghia":"đang tìm hiểu (在 và 著 = đang)"},{"hanzi":"甚麼是佛法","audio":"[(shen2)(me)(shi4)(fo2)(fa3)]","pinyin":"shénme shì fófǎ","yueyin":"(shấn mơ)(shi*`)(fúa fả)","nghia":"cái gì là Phật pháp"}]
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