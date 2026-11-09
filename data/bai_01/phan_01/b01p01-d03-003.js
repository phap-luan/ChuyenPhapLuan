/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-003)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(na4)]</td><td id=\"m_audio_1\">[(bu2)]</td><td id=\"m_audio_2\">[(jiu4)(shi4)]</td><td id=\"m_audio_3\">[(du4)(ren2)]</td><td id=\"m_audio_4\">[(ma)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(na`)</td><td id=\"m_yueyin_1\">(pú)</td><td id=\"m_yueyin_2\">(chi:âu` shi*`)</td><td id=\"m_yueyin_3\">(tu` rấn)</td><td id=\"m_yueyin_4\">(ma)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">那</td><td id=\"m_hanzi_1\">不</td><td id=\"m_hanzi_2\">就是</td><td id=\"m_hanzi_3\">度人</td><td id=\"m_hanzi_4\">嗎</td><td id=\"m_hanzi_5\">?</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">nà</td><td id=\"m_pinyin_1\">bú</td><td id=\"m_pinyin_2\">jiùshì</td><td id=\"m_pinyin_3\">dùrén</td><td id=\"m_pinyin_4\">ma</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đó</td><td id=\"m_nghia_1\">không phải</td><td id=\"m_nghia_2\">chính là</td><td id=\"m_nghia_3\">độ nhân</td><td id=\"m_nghia_4\">sao</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p><font color=\"#000000\"><b>đó không phải chính là độ nhân sao?</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Đó chẳng phải độ nhân sao?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"那","audio":"[(na4)]","pinyin":"nà","yueyin":"(na`)","nghia":"đó, vậy thì"},{"hanzi":"不","audio":"[(bu2)]","pinyin":"bú","yueyin":"(pú)","nghia":"không phải"},{"hanzi":"就是","audio":"[(jiu4)(shi4)]","pinyin":"jiùshì","yueyin":"(chi:âu` shi*`)","nghia":"chính là"},{"hanzi":"度人","audio":"[(du4)(ren2)]","pinyin":"dùrén","yueyin":"(tu` rấn)","nghia":"độ nhân, cứu độ chúng sinh"},{"hanzi":"嗎","audio":"[(ma)]","pinyin":"ma","yueyin":"(ma)","nghia":"sao, à....trợ từ nghi vấn"}]
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