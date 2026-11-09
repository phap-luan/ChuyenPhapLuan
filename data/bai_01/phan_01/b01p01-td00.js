/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-td00)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(di4)(yi1)]</td><td id=\"m_audio_1\">[(jiang3)]</td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(ti`)(y-)</td><td id=\"m_yueyin_1\">(chi:ảng)</td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">第一</td><td id=\"m_hanzi_1\">講</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dì yī</td><td id=\"m_pinyin_1\">jiǎng</td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">thứ nhất</td><td id=\"m_nghia_1\">bài giảng</td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>thứ nhất bài giảng</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Bài giảng thứ nhất</span></p>\n      </div>",
    tableData: [{"hanzi":"第一","audio":"[(di4)(yi1)]","pinyin":"dì yī","yueyin":"(ti`)(y-)","nghia":"thứ nhất (第 + số = số thứ tự)"},{"hanzi":"講","audio":"[(jiang3)]","pinyin":"jiǎng","yueyin":"(chi:ảng)","nghia":"bài giảng"}]
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