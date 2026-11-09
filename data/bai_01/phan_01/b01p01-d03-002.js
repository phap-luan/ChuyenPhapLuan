/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-002)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(da4)(jia1)]</td><td id=\"m_audio_1\">[(xiang3)(yi)(xiang3)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(shi4)]</td><td id=\"m_audio_4\">[(shen2)(me)]</td><td id=\"m_audio_5\">[(wen4)(ti2)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(ta` chi:a-)</td><td id=\"m_yueyin_1\">(xi:ảng)(y)(xi:ảng)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(shi*`)</td><td id=\"m_yueyin_4\">(shấn mơ)</td><td id=\"m_yueyin_5\">(guân` thí)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">大家</td><td id=\"m_hanzi_1\">想一想</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">是</td><td id=\"m_hanzi_4\">甚麼</td><td id=\"m_hanzi_5\">問題</td><td id=\"m_hanzi_6\">?</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dàjiā</td><td id=\"m_pinyin_1\">xiǎng yi xiǎng</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">shì</td><td id=\"m_pinyin_4\">shénme</td><td id=\"m_pinyin_5\">wèntí</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">mọi người</td><td id=\"m_nghia_1\">nghĩ thử xem</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">là</td><td id=\"m_nghia_4\">cái gì</td><td id=\"m_nghia_5\">vấn đề</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>mọi người nghĩ thử xem, là cái gì vấn đề?</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">mọi người nghĩ xem, [đó] là vấn đề gì?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"大家","audio":"[(da4)(jia1)]","pinyin":"dàjiā","yueyin":"(ta` chi:a-)","nghia":"mọi người"},{"hanzi":"想一想","audio":"[(xiang3)(yi)(xiang3)]","pinyin":"xiǎng yi xiǎng","yueyin":"(xi:ảng)(y)(xi:ảng)","nghia":"nghĩ thử xem"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"甚麼","audio":"[(shen2)(me)]","pinyin":"shénme","yueyin":"(shấn mơ)","nghia":"cái gì, nào"},{"hanzi":"問題","audio":"[(wen4)(ti2)]","pinyin":"wèntí","yueyin":"(guân` thí)","nghia":"vấn đề"}]
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