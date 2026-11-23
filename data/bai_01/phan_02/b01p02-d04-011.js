/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d04-011",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d04-011)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)(qi2)(shi2)]</td><td id=\"m_audio_1\">[(shi4)(jiang3)(le)]</td><td id=\"m_audio_2\">[(zhe4)(me)(yi2)(ge4)(li3)]</td><td id=\"m_audio_3\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha-)(ch'í shí*)</td><td id=\"m_yueyin_1\">(shi*`)(chi:ảng)(lơ)</td><td id=\"m_yueyin_2\">(trưa` mơ)(ý)(cưa`)(lỉ)</td><td id=\"m_yueyin_3\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他其實</td><td id=\"m_hanzi_1\">是講<font color=\"#f97316\">了</font></td><td id=\"m_hanzi_2\">這麼一個理</td><td id=\"m_hanzi_3\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tā qíshí</td><td id=\"m_pinyin_1\">shì jiǎng le</td><td id=\"m_pinyin_2\">zhème yí gè lǐ</td><td id=\"m_pinyin_3\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">ông kỳ thực</td><td id=\"m_nghia_1\">là đã giảng</td><td id=\"m_nghia_2\">như vậy một cái Lý</td><td id=\"m_nghia_3\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">ông kỳ thực là </font><font color=\"#f97316\">đã</font><font color=\"#000000\"> giảng như vậy một cái Lý.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Thật ra Ông đã giảng chính [Pháp] lý này.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"他其實","audio":"[(ta1)(qi2)(shi2)]","pinyin":"tā qíshí","yueyin":"(tha-)(ch'í shí*)","nghia":"ông kỳ thực"},{"hanzi":"是講了","audio":"[(shi4)(jiang3)(le)]","pinyin":"shì jiǎng le","yueyin":"(shi*`)(chi:ảng)(lơ)","nghia":"là đã giảng"},{"hanzi":"這麼一個理","audio":"[(zhe4)(me)(yi2)(ge4)(li3)]","pinyin":"zhème yí gè lǐ","yueyin":"(trưa` mơ)(ý)(cưa`)(lỉ)","nghia":"như vậy một cái Lý"}]
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