/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d01-016",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d01-016)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ren2)(men)]</td><td id=\"m_audio_1\">[(yi3)(jing1)]</td><td id=\"m_audio_2\">[(xi2)(guan4)(yu2)]</td><td id=\"m_audio_3\">[(zhe4)(yang4)(chuan2)(gong1)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(rấn mân)</td><td id=\"m_yueyin_1\">(ỷ ching-)</td><td id=\"m_yueyin_2\">(xí coan`)(úy)</td><td id=\"m_yueyin_3\">(trưa` yang`)(tr'oán)(cung-)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">人們</td><td id=\"m_hanzi_1\">已經</td><td id=\"m_hanzi_2\"><font color=\"#ec4899\">習慣</font>於</td><td id=\"m_hanzi_3\">這樣傳功</td><td id=\"m_hanzi_4\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">rénmen</td><td id=\"m_pinyin_1\">yǐjīng</td><td id=\"m_pinyin_2\">xíguàn yú</td><td id=\"m_pinyin_3\">zhèyàng chuángōng</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">mọi người</td><td id=\"m_nghia_1\">đã</td><td id=\"m_nghia_2\">quen với</td><td id=\"m_nghia_3\">thế này truyền công</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">mọi người đã [</font><font color=\"#ec4899\">quen</font><font color=\"#000000\"> với] thế này truyền công.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Người ta hiện nay đã quen với [phương cách] truyền công như thế.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"人們","audio":"[(ren2)(men)]","pinyin":"rénmen","yueyin":"(rấn mân)","nghia":"mọi người"},{"hanzi":"已經","audio":"[(yi3)(jing1)]","pinyin":"yǐjīng","yueyin":"(ỷ ching-)","nghia":"đã"},{"hanzi":"習慣於","audio":"[(xi2)(guan4)(yu2)]","pinyin":"xíguàn yú","yueyin":"(xí coan`)(úy)","nghia":"quen với"},{"hanzi":"這樣傳功","audio":"[(zhe4)(yang4)(chuan2)(gong1)]","pinyin":"zhèyàng chuángōng","yueyin":"(trưa` yang`)(tr'oán)(cung-)","nghia":"thế này truyền công"}]
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