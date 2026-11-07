/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-016",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-016.mp3)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)]</td><td id=\"m_audio_1\">[(ye3)]</td><td id=\"m_audio_2\">[(bu2)(shi4)]</td><td id=\"m_audio_3\">[(yi4)(ban1)(ren2)]</td><td id=\"m_audio_4\">[(neng2)]</td><td id=\"m_audio_5\">[(chuan2)]</td><td id=\"m_audio_6\">[(de)(liao3)]</td><td id=\"m_audio_7\">[(de)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha-)</td><td id=\"m_yueyin_1\">(yể)</td><td id=\"m_yueyin_2\">(pú)(shi*`)</td><td id=\"m_yueyin_3\">(y` pan-)(rấn)</td><td id=\"m_yueyin_4\">(nấng)</td><td id=\"m_yueyin_5\">(tr'oán)</td><td id=\"m_yueyin_6\">(tơ)(li:ảo)</td><td id=\"m_yueyin_7\">(tơ)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">它</td><td id=\"m_hanzi_1\">也</td><td id=\"m_hanzi_2\">不是</td><td id=\"m_hanzi_3\">一般人</td><td id=\"m_hanzi_4\">能</td><td id=\"m_hanzi_5\">傳</td><td id=\"m_hanzi_6\">的了</td><td id=\"m_hanzi_7\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_8\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tā</td><td id=\"m_pinyin_1\">yě</td><td id=\"m_pinyin_2\">bú shì</td><td id=\"m_pinyin_3\">yìbān rén</td><td id=\"m_pinyin_4\">néng</td><td id=\"m_pinyin_5\">chuán</td><td id=\"m_pinyin_6\">de liǎo</td><td id=\"m_pinyin_7\">de</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nó</td><td id=\"m_nghia_1\">cũng</td><td id=\"m_nghia_2\">không phải là</td><td id=\"m_nghia_3\">một người thường</td><td id=\"m_nghia_4\">có thể</td><td id=\"m_nghia_5\">truyền</td><td id=\"m_nghia_6\">nổi</td><td id=\"m_nghia_7\">đâu</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">nó cũng không phải là một người thường có thể truyền nổi </font><font color=\"#3b82f6\">đâu</font><font color=\"#000000\">,</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Nó không phải là [điều] mà người bình thường có thể truyền được,</span></p>\n      </div>",
    tableData: [{"hanzi":"它","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"nó"},{"hanzi":"也","audio":"[(ye3)]","pinyin":"yě","yueyin":"(yể)","nghia":"cũng"},{"hanzi":"不是","audio":"[(bu2)(shi4)]","pinyin":"bú shì","yueyin":"(pú)(shi*`)","nghia":"không phải là"},{"hanzi":"一般人","audio":"[(yi4)(ban1)(ren2)]","pinyin":"yìbān rén","yueyin":"(y` pan-)(rấn)","nghia":"người bình thường, người thường"},{"hanzi":"能","audio":"[(neng2)]","pinyin":"néng","yueyin":"(nấng)","nghia":"có thể"},{"hanzi":"傳","audio":"[(chuan2)]","pinyin":"chuán","yueyin":"(tr'oán)","nghia":"truyền"},{"hanzi":"的了","audio":"[(de)(liao3)]","pinyin":"de liǎo","yueyin":"(tơ)(li:ảo)","nghia":"nổi, được nổi.. (= 得了 (déliǎo): hậu tố khả năng (ở đây viết 的了))"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ nhấn mạnh - cuối trong cấu trúc 不是…的"}]
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