/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-018",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-018)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(te4)(bie2)(shi4)]</td><td id=\"m_audio_1\">[(wo3)(men)]</td><td id=\"m_audio_2\">[(you3)]</td><td id=\"m_audio_3\">[(xu3)(duo1)]</td><td id=\"m_audio_4\">[(lian4)(gong1)(ren2)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(thưa` pi:ế)(shi*`)</td><td id=\"m_yueyin_1\">(gủa mân)</td><td id=\"m_yueyin_2\">(yẩu)</td><td id=\"m_yueyin_3\">(xủy tua-)</td><td id=\"m_yueyin_4\">(li:en`)(cung-)(rấn)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">特別是</td><td id=\"m_hanzi_1\">我們</td><td id=\"m_hanzi_2\">有</td><td id=\"m_hanzi_3\">許多</td><td id=\"m_hanzi_4\">練功人</td><td id=\"m_hanzi_5\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tèbié shì</td><td id=\"m_pinyin_1\">wǒmen</td><td id=\"m_pinyin_2\">yǒu</td><td id=\"m_pinyin_3\">xǔduō</td><td id=\"m_pinyin_4\">liàn gōng rén</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đặc biệt là</td><td id=\"m_nghia_1\">chúng ta</td><td id=\"m_nghia_2\">có</td><td id=\"m_nghia_3\">rất nhiều</td><td id=\"m_nghia_4\">người luyện công</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>đặc biệt là chúng ta có rất nhiều người luyện công,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Đặc biệt là chúng ta có rất nhiều người luyện công,</span></p>\n      </div>",
    tableData: [{"hanzi":"特別是","audio":"[(te4)(bie2)(shi4)]","pinyin":"tèbié shì","yueyin":"(thưa` pi:ế)(shi*`)","nghia":"đặc biệt là"},{"hanzi":"我們","audio":"[(wo3)(men)]","pinyin":"wǒmen","yueyin":"(gủa mân)","nghia":"chúng ta, chúng tôi"},{"hanzi":"有","audio":"[(you3)]","pinyin":"yǒu","yueyin":"(yẩu)","nghia":"có"},{"hanzi":"許多","audio":"[(xu3)(duo1)]","pinyin":"xǔduō","yueyin":"(xủy tua-)","nghia":"rất nhiều"},{"hanzi":"練功人","audio":"[(lian4)(gong1)(ren2)]","pinyin":"liàn gōng rén","yueyin":"(li:en`)(cung-)(rấn)","nghia":"người luyện công"}]
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