/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-008",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-008)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(men)(shuo1)]</td><td id=\"m_audio_1\">[(zhe4)(yi4)(fa3)(men2)]</td><td id=\"m_audio_2\">[(jiu4)(shi4)]</td><td id=\"m_audio_3\">[(zuan1)(niu2)(jiao3)(jian1)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa mân)(shua-)</td><td id=\"m_yueyin_1\">(trưa`)(y`)(fả mấn)</td><td id=\"m_yueyin_2\">(chi:âu`)(shi*`)</td><td id=\"m_yueyin_3\">(zoan-)(ni:ấu chi:ảo chi:en-)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我們說</td><td id=\"m_hanzi_1\"><font color=\"#3b82f6\">這</font>一法門</td><td id=\"m_hanzi_2\">就是</td><td id=\"m_hanzi_3\">鑽<font color=\"#ec4899\">牛角尖</font></td><td id=\"m_hanzi_4\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒmen shuō</td><td id=\"m_pinyin_1\">zhè yì fǎmén</td><td id=\"m_pinyin_2\">jiù shì</td><td id=\"m_pinyin_3\">zuān niújiǎojiān</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chúng tôi nói</td><td id=\"m_nghia_1\">pháp môn này</td><td id=\"m_nghia_2\">chính là</td><td id=\"m_nghia_3\">khoan sừng bò</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">chúng tôi nói pháp môn </font><font color=\"#3b82f6\">này</font><font color=\"#000000\"> chính là khoan&nbsp;</font><font color=\"#ec4899\">sừng bò</font><font color=\"#000000\">.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Chúng tôi nói cái pháp môn ấy là thứ dùi sừng bò.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我們說","audio":"[(wo3)(men)(shuo1)]","pinyin":"wǒmen shuō","yueyin":"(gủa mân)(shua-)","nghia":"chúng tôi nói"},{"hanzi":"這一法門","audio":"[(zhe4)(yi4)(fa3)(men2)]","pinyin":"zhè yì fǎmén","yueyin":"(trưa`)(y`)(fả mấn)","nghia":"pháp môn này"},{"hanzi":"就是","audio":"[(jiu4)(shi4)]","pinyin":"jiù shì","yueyin":"(chi:âu`)(shi*`)","nghia":"chính là"},{"hanzi":"鑽牛角尖","audio":"[(zuan1)(niu2)(jiao3)(jian1)]","pinyin":"zuān niújiǎojiān","yueyin":"(zoan-)(ni:ấu chi:ảo chi:en-)","nghia":"khoan (dùi) sừng bò (cố đâm vào ngõ cụt)"}]
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