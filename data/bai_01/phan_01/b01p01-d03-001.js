/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wang3)]</td><td id=\"m_audio_1\">[(gao1)(ceng2)(ci4)]</td><td id=\"m_audio_2\">[(shang4)]</td><td id=\"m_audio_3\">[(chuan2)(gong1)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(goảng)</td><td id=\"m_yueyin_1\">(cao-)(s'ấng s'ư`)</td><td id=\"m_yueyin_2\">(shang`)</td><td id=\"m_yueyin_3\">(tr'oán cung-)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">往</td><td id=\"m_hanzi_1\">高層次</td><td id=\"m_hanzi_2\">上</td><td id=\"m_hanzi_3\">傳功</td><td id=\"m_hanzi_4\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǎng</td><td id=\"m_pinyin_1\">gāo céngcì</td><td id=\"m_pinyin_2\">shàng</td><td id=\"m_pinyin_3\">chuángōng</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">hướng</td><td id=\"m_nghia_1\">tầng thứ cao</td><td id=\"m_nghia_2\">lên</td><td id=\"m_nghia_3\">truyền công</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>hướng tầng thứ cao lên truyền công,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Truyền công lên cao tầng,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"往","audio":"[(wang3)]","pinyin":"wǎng","yueyin":"(goảng)","nghia":"hướng"},{"hanzi":"高層次","audio":"[(gao1)(ceng2)(ci4)]","pinyin":"gāo céngcì","yueyin":"(cao-)(s'ấng s'ư`)","nghia":"tầng thứ cao"},{"hanzi":"上","audio":"[(shang4)]","pinyin":"shàng","yueyin":"(shang`)","nghia":"lên"},{"hanzi":"傳功","audio":"[(chuan2)(gong1)]","pinyin":"chuángōng","yueyin":"(tr'oán cung-)","nghia":"truyền công"}]
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