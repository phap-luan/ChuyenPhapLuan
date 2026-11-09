/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-td01)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhen1)(zheng4)]</td><td id=\"m_audio_1\">[(wang3)]</td><td id=\"m_audio_2\">[(gao1)(ceng2)(ci4)]</td><td id=\"m_audio_3\">[(shang4)]</td><td id=\"m_audio_4\">[(dai4)]</td><td id=\"m_audio_5\">[(ren2)]</td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trân- trâng`)</td><td id=\"m_yueyin_1\">(goảng)</td><td id=\"m_yueyin_2\">(cao-)(s'ấng s'ư`)</td><td id=\"m_yueyin_3\">(shang`)</td><td id=\"m_yueyin_4\">(tai`)</td><td id=\"m_yueyin_5\">(rấn)</td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">真正</td><td id=\"m_hanzi_1\">往</td><td id=\"m_hanzi_2\">高層次</td><td id=\"m_hanzi_3\">上</td><td id=\"m_hanzi_4\">帶</td><td id=\"m_hanzi_5\">人</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhēnzhèng</td><td id=\"m_pinyin_1\">wǎng</td><td id=\"m_pinyin_2\">gāo céngcì</td><td id=\"m_pinyin_3\">shàng</td><td id=\"m_pinyin_4\">dài</td><td id=\"m_pinyin_5\">rén</td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chân chính</td><td id=\"m_nghia_1\">hướng</td><td id=\"m_nghia_2\">tầng thứ cao</td><td id=\"m_nghia_3\">lên</td><td id=\"m_nghia_4\">đưa</td><td id=\"m_nghia_5\">con người</td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>chân chính hướng tầng thứ cao lên đưa con người</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br><span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Chân chính đưa con người lên cao tầng</span></p>\n      </div>",
    tableData: [{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"chân chính"},{"hanzi":"往","audio":"[(wang3)]","pinyin":"wǎng","yueyin":"(goảng)","nghia":"hướng"},{"hanzi":"高層次","audio":"[(gao1)(ceng2)(ci4)]","pinyin":"gāo céngcì","yueyin":"(cao-)(s'ấng s'ư`)","nghia":"tầng thứ cao"},{"hanzi":"上","audio":"[(shang4)]","pinyin":"shàng","yueyin":"(shang`)","nghia":"lên (ở đây bổ nghĩa cho 往…上: hướng lên)"},{"hanzi":"帶","audio":"[(dai4)]","pinyin":"dài","yueyin":"(tai`)","nghia":"dẫn dắt, đưa"},{"hanzi":"人","audio":"[(ren2)]","pinyin":"rén","yueyin":"(rấn)","nghia":"con người"}]
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