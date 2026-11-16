/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d01-011",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d01-011)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhe4)(xie1)(wen4)(ti2)]</td><td id=\"m_audio_1\">[(bu4)(jie3)(jue2)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(ni3)(lian4)(bu4)(liao3)(gong1)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trưa` xi:ê-)(guân` thí)</td><td id=\"m_yueyin_1\">(pu`)(chi:ể chuế)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(nỉ)(li:en`)(pu`)(li:ảo)(cung-)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"><font color=\"#3b82f6\">這</font>些問題</td><td id=\"m_hanzi_1\">不解決</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">你煉不了功</td><td id=\"m_hanzi_4\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhèxiē wèntí</td><td id=\"m_pinyin_1\">bù jiějué</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">nǐ liàn bù liǎo gōng</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">những vấn đề này</td><td id=\"m_nghia_1\">không giải quyết</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">bạn luyện không nổi công</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">những vấn đề </font><font color=\"#3b82f6\">này</font><font color=\"#000000\"> không giải quyết, bạn luyện không nổi công.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Nếu vấn đề ấy chẳng được giải quyết, [thì] chư vị không luyện công được.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"這些問題","audio":"[(zhe4)(xie1)(wen4)(ti2)]","pinyin":"zhèxiē wèntí","yueyin":"(trưa` xi:ê-)(guân` thí)","nghia":"những vấn đề này"},{"hanzi":"不解決","audio":"[(bu4)(jie3)(jue2)]","pinyin":"bù jiějué","yueyin":"(pu`)(chi:ể chuế)","nghia":"không giải quyết"},{"hanzi":"你煉不了功","audio":"[(ni3)(lian4)(bu4)(liao3)(gong1)]","pinyin":"nǐ liàn bù liǎo gōng","yueyin":"(nỉ)(li:en`)(pu`)(li:ảo)(cung-)","nghia":"bạn luyện không nổi công, bạn không luyện công nổi"}]
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