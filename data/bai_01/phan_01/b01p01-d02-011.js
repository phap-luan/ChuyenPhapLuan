/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-011",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-011)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)]</td><td id=\"m_audio_1\">[(ye3)]</td><td id=\"m_audio_2\">[(bu2)(hui4)]</td><td id=\"m_audio_3\">[(lao3)]</td><td id=\"m_audio_4\">[(zhe4)(yang4)]</td><td id=\"m_audio_5\">[(chuan2)]</td><td id=\"m_audio_6\">[(xia4)(qu4)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)</td><td id=\"m_yueyin_1\">(yể)</td><td id=\"m_yueyin_2\">(pú)(huây`)</td><td id=\"m_yueyin_3\">(lảo)</td><td id=\"m_yueyin_4\">(trưa` yang`)</td><td id=\"m_yueyin_5\">(tr'oán)</td><td id=\"m_yueyin_6\">(xi:a` ch'uy`)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我</td><td id=\"m_hanzi_1\">也</td><td id=\"m_hanzi_2\">不會</td><td id=\"m_hanzi_3\">老</td><td id=\"m_hanzi_4\">這樣</td><td id=\"m_hanzi_5\">傳</td><td id=\"m_hanzi_6\">下去</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ</td><td id=\"m_pinyin_1\">yě</td><td id=\"m_pinyin_2\">bú huì</td><td id=\"m_pinyin_3\">lǎo</td><td id=\"m_pinyin_4\">zhèyàng</td><td id=\"m_pinyin_5\">chuán</td><td id=\"m_pinyin_6\">xiàqù</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi</td><td id=\"m_nghia_1\">cũng</td><td id=\"m_nghia_2\">sẽ không</td><td id=\"m_nghia_3\">mãi</td><td id=\"m_nghia_4\">như thế này</td><td id=\"m_nghia_5\">truyền</td><td id=\"m_nghia_6\">tiếp tục</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>tôi cũng sẽ không mãi như thế này truyền tiếp tục.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">và tôi cũng không truyền [giảng] lâu theo cách này.</span></p>\n      </div>",
    tableData: [{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"也","audio":"[(ye3)]","pinyin":"yě","yueyin":"(yể)","nghia":"cũng"},{"hanzi":"不會","audio":"[(bu2)(hui4)]","pinyin":"bú huì","yueyin":"(pú)(huây`)","nghia":"sẽ không"},{"hanzi":"老","audio":"[(lao3)]","pinyin":"lǎo","yueyin":"(lảo)","nghia":"lâu, cứ, mãi (phó từ, = 總是)"},{"hanzi":"這樣","audio":"[(zhe4)(yang4)]","pinyin":"zhèyàng","yueyin":"(trưa` yang`)","nghia":"như thế này"},{"hanzi":"傳","audio":"[(chuan2)]","pinyin":"chuán","yueyin":"(tr'oán)","nghia":"truyền"},{"hanzi":"下去","audio":"[(xia4)(qu4)]","pinyin":"xiàqù","yueyin":"(xi:a` ch'uy`)","nghia":"tiếp tục (bổ ngữ xu hướng chỉ sự tiếp diễn)"}]
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