/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-007",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-007.mp3)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dang1)(ran2)]</td><td id=\"m_audio_1\">[(bu2)(shi4)(shuo1)]</td><td id=\"m_audio_2\">[(bie2)(ren2)]</td><td id=\"m_audio_3\">[(de)]</td><td id=\"m_audio_4\">[(gong1)(fa3)]</td><td id=\"m_audio_5\">[(bu4)(hao3)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tang- rán)</td><td id=\"m_yueyin_1\">(pú)(shi*`)(shua-)</td><td id=\"m_yueyin_2\">(pi:ế rấn)</td><td id=\"m_yueyin_3\">(tơ)</td><td id=\"m_yueyin_4\">(cung- fả)</td><td id=\"m_yueyin_5\">(pu`)(hảo)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">當然</td><td id=\"m_hanzi_1\">不是說</td><td id=\"m_hanzi_2\">別人</td><td id=\"m_hanzi_3\">的</td><td id=\"m_hanzi_4\">功法</td><td id=\"m_hanzi_5\">不好</td><td id=\"m_hanzi_6\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dāngrán</td><td id=\"m_pinyin_1\">bú shì shuō</td><td id=\"m_pinyin_2\">biérén</td><td id=\"m_pinyin_3\">de</td><td id=\"m_pinyin_4\">gōngfǎ</td><td id=\"m_pinyin_5\">bù hǎo</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đương nhiên</td><td id=\"m_nghia_1\">không phải nói</td><td id=\"m_nghia_2\">người khác</td><td id=\"m_nghia_3\">về</td><td id=\"m_nghia_4\">công pháp</td><td id=\"m_nghia_5\">không tốt</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>đương nhiên không phải nói người khác về công pháp không tốt ,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Đương nhiên, không phải nói là công pháp của những người khác không tốt;</span></p>\n      </div>",
    tableData: [{"hanzi":"當然","audio":"[(dang1)(ran2)]","pinyin":"dāngrán","yueyin":"(tang- rán)","nghia":"đương nhiên"},{"hanzi":"不是說","audio":"[(bu2)(shi4)(shuo1)]","pinyin":"bú shì shuō","yueyin":"(pú)(shi*`)(shua-)","nghia":"không phải nói"},{"hanzi":"別人","audio":"[(bie2)(ren2)]","pinyin":"biérén","yueyin":"(pi:ế rấn)","nghia":"người khác"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ"},{"hanzi":"功法","audio":"[(gong1)(fa3)]","pinyin":"gōngfǎ","yueyin":"(cung- fả)","nghia":"công pháp"},{"hanzi":"不好","audio":"[(bu4)(hao3)]","pinyin":"bù hǎo","yueyin":"(pu`)(hảo)","nghia":"không tốt"}]
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