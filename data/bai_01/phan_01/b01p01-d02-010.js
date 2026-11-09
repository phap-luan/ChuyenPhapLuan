/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-010",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-010)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhe4)(yang4)]</td><td id=\"m_audio_1\">[(de)]</td><td id=\"m_audio_2\">[(shi4qing)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(ji1)(hui4)]</td><td id=\"m_audio_5\">[(bu4)]</td><td id=\"m_audio_6\">[(duo1)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trưa` yang`)</td><td id=\"m_yueyin_1\">(tơ)</td><td id=\"m_yueyin_2\">(shi*` ch'ing)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(chi- huây`)</td><td id=\"m_yueyin_5\">(pu`)</td><td id=\"m_yueyin_6\">(tua-)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">這樣</td><td id=\"m_hanzi_1\">的</td><td id=\"m_hanzi_2\">事情</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">機會</td><td id=\"m_hanzi_5\">不</td><td id=\"m_hanzi_6\">多</td><td id=\"m_hanzi_7\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhèyàng</td><td id=\"m_pinyin_1\">de</td><td id=\"m_pinyin_2\">shìqing</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">jīhuì</td><td id=\"m_pinyin_5\">bù</td><td id=\"m_pinyin_6\">duō</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">như thế này</td><td id=\"m_nghia_1\">về</td><td id=\"m_nghia_2\">sự tình</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">cơ hội</td><td id=\"m_nghia_5\">không</td><td id=\"m_nghia_6\">nhiều</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>như thế này về sự tình, cơ hội không nhiều,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Sự việc như thế này, cơ hội không nhiều,</span></p>\n      </div>",
    tableData: [{"hanzi":"這樣","audio":"[(zhe4)(yang4)]","pinyin":"zhèyàng","yueyin":"(trưa` yang`)","nghia":"như thế này"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"事情","audio":"[(shi4qing)]","pinyin":"shìqing","yueyin":"(shi*` ch'ing)","nghia":"sự tình, sự việc"},{"hanzi":"機會","audio":"[(ji1)(hui4)]","pinyin":"jīhuì","yueyin":"(chi- huây`)","nghia":"cơ hội"},{"hanzi":"不","audio":"[(bu4)]","pinyin":"bù","yueyin":"(pu`)","nghia":"không"},{"hanzi":"多","audio":"[(duo1)]","pinyin":"duō","yueyin":"(tua-)","nghia":"nhiều"}]
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