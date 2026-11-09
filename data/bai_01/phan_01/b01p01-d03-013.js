/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-013",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-013)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(gao4)(su)]</td><td id=\"m_audio_1\">[(ni3)]</td><td id=\"m_audio_2\">[(yi2)(ge4)]</td><td id=\"m_audio_3\">[(zhen1)(li3)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(cao` su)</td><td id=\"m_yueyin_1\">(nỉ)</td><td id=\"m_yueyin_2\">(ý)(cưa`)</td><td id=\"m_yueyin_3\">(trân- lỉ)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">告訴</td><td id=\"m_hanzi_1\">你</td><td id=\"m_hanzi_2\">一個</td><td id=\"m_hanzi_3\">真理</td><td id=\"m_hanzi_4\">:</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">gàosu</td><td id=\"m_pinyin_1\">nǐ</td><td id=\"m_pinyin_2\">yí gè</td><td id=\"m_pinyin_3\">zhēnlǐ</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nói cho</td><td id=\"m_nghia_1\">bạn</td><td id=\"m_nghia_2\">một điều</td><td id=\"m_nghia_3\">chân lý</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>nói cho bạn một điều chân lý:</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">[Tôi] nói rõ cho chư vị một chân lý:</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"告訴","audio":"[(gao4)(su)]","pinyin":"gàosu","yueyin":"(cao` su)","nghia":"nói cho biết, bảo cho"},{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"一個","audio":"[(yi2)(ge4)]","pinyin":"yí gè","yueyin":"(ý)(cưa`)","nghia":"một điều (個:cái, con, điều....)"},{"hanzi":"真理","audio":"[(zhen1)(li3)]","pinyin":"zhēnlǐ","yueyin":"(trân- lỉ)","nghia":"chân lý"}]
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