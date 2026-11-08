/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-007",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-007)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(lai2)]</td><td id=\"m_audio_1\">[(ting1)(yi)(ting1)]</td><td id=\"m_audio_2\">[(li3)(lun4)]</td><td id=\"m_audio_3\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(lái)</td><td id=\"m_yueyin_1\">(thing-)(y)(thing-)</td><td id=\"m_yueyin_2\">(lỉ luân`)</td><td id=\"m_yueyin_3\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">來</td><td id=\"m_hanzi_1\">聽一聽</td><td id=\"m_hanzi_2\">理論</td><td id=\"m_hanzi_3\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">lái</td><td id=\"m_pinyin_1\">tīng yi tīng</td><td id=\"m_pinyin_2\">lǐlùn</td><td id=\"m_pinyin_3\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đến</td><td id=\"m_nghia_1\">nghe thử</td><td id=\"m_nghia_2\">lý luận</td><td id=\"m_nghia_3\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\">\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">đến nghe thử lý luận,</span>\n          <span></span>\n        </p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">đến nghe ngóng lý luận,</span></p>\n      </div>",
    tableData: [{"hanzi":"來","audio":"[(lai2)]","pinyin":"lái","yueyin":"(lái)","nghia":"đến (để làm gì)"},{"hanzi":"聽一聽","audio":"[(ting1)(yi)(ting1)]","pinyin":"tīng yi tīng","yueyin":"(thing-)(y)(thing-)","nghia":"nghe thử, nghe xem"},{"hanzi":"理論","audio":"[(li3)(lun4)]","pinyin":"lǐlùn","yueyin":"(lỉ luân`)","nghia":"lý luận, lý thuyết"}]
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