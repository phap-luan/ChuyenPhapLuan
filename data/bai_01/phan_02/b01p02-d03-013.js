/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-013",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-013)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(na4)(yi4si)(shi4)]</td><td id=\"m_audio_1\">[(ni3)(bu2)(yao4)(wen4)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(yao4)(zi4)(ji3)(wu4)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(na`)(y` sư)(shi*`)</td><td id=\"m_yueyin_1\">(nỉ)(pú)(yao`)(guân`)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(yao`)(zư`* chỉ)(u`)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"><font color=\"#3b82f6\">那</font><font color=\"#a855f7\">意思</font>是</td><td id=\"m_hanzi_1\">你不要問</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">要自己悟</td><td id=\"m_hanzi_4\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">nà yìsi shì</td><td id=\"m_pinyin_1\">nǐ bú yào wèn</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">yào zìjǐ wù</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đó ý nghĩa là</td><td id=\"m_nghia_1\">bạn không cần hỏi</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">phải tự mình ngộ</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#3b82f6\">đó</font><font color=\"#000000\">&nbsp;</font><font color=\"#a855f7\">ý nghĩa</font><font color=\"#000000\"> là bạn không cần hỏi, phải tự mình ngộ.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Đó nghĩa là chư vị không được hỏi, phải tự mình ngộ.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"那意思是","audio":"[(na4)(yi4si)(shi4)]","pinyin":"nà yìsi shì","yueyin":"(na`)(y` sư)(shi*`)","nghia":"đó ý nghĩa là"},{"hanzi":"你不要問","audio":"[(ni3)(bu2)(yao4)(wen4)]","pinyin":"nǐ bú yào wèn","yueyin":"(nỉ)(pú)(yao`)(guân`)","nghia":"bạn không cần hỏi"},{"hanzi":"要自己悟","audio":"[(yao4)(zi4)(ji3)(wu4)]","pinyin":"yào zìjǐ wù","yueyin":"(yao`)(zư`* chỉ)(u`)","nghia":"phải tự mình ngộ"}]
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