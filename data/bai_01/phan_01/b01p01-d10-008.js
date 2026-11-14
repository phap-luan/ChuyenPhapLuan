/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d10-008",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d10-008)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(men)(zhi3)(de)(shi4)]</td><td id=\"m_audio_1\">[(zhe4)(liang3)(da4)(ceng2)(ci4)]</td><td id=\"m_audio_2\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa mân)(trỉ*)(tơ)(shi*`)</td><td id=\"m_yueyin_1\">(trưa`)(li:ảng)(ta`)(s'ấng s'ư`)</td><td id=\"m_yueyin_2\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我們指的是</td><td id=\"m_hanzi_1\">這兩大層次</td><td id=\"m_hanzi_2\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒmen zhǐ de shì</td><td id=\"m_pinyin_1\">zhè liǎng dà céngcì</td><td id=\"m_pinyin_2\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chúng tôi chỉ đích thị</td><td id=\"m_nghia_1\">hai đại tầng thứ này</td><td id=\"m_nghia_2\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>chúng tôi chỉ đích thị hai đại tầng thứ này.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Chúng tôi nói về hai tầng lớn như vậy.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我們指的是","audio":"[(wo3)(men)(zhi3)(de)(shi4)]","pinyin":"wǒmen zhǐ de shì","yueyin":"(gủa mân)(trỉ*)(tơ)(shi*`)","nghia":"chúng tôi chỉ đích thị"},{"hanzi":"這兩大層次","audio":"[(zhe4)(liang3)(da4)(ceng2)(ci4)]","pinyin":"zhè liǎng dà céngcì","yueyin":"(trưa`)(li:ảng)(ta`)(s'ấng s'ư`)","nghia":"hai đại tầng thứ này"}]
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