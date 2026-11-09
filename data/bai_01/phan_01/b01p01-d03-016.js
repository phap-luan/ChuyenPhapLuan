/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-016",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-016)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wei4)(le)]</td><td id=\"m_audio_1\">[(ge4)(ren2)]</td><td id=\"m_audio_2\">[(de)]</td><td id=\"m_audio_3\">[(zhe4)]</td><td id=\"m_audio_4\">[(dian3)]</td><td id=\"m_audio_5\">[(li4)(yi4)]</td><td id=\"m_audio_6\"></td><td id=\"m_audio_7\">[(qu4)]</td><td id=\"m_audio_8\">[(shang1)(hai4)]</td><td id=\"m_audio_9\">[(bie2)(ren2)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(guây` lơ)</td><td id=\"m_yueyin_1\">(cưa` rấn)</td><td id=\"m_yueyin_2\">(tơ)</td><td id=\"m_yueyin_3\">(trưa`)</td><td id=\"m_yueyin_4\">(ti:ẻn)</td><td id=\"m_yueyin_5\">(li` y`)</td><td id=\"m_yueyin_6\"></td><td id=\"m_yueyin_7\">(ch'uy`)</td><td id=\"m_yueyin_8\">(shang- hai`)</td><td id=\"m_yueyin_9\">(pi:ế rấn)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">為了</td><td id=\"m_hanzi_1\">個人</td><td id=\"m_hanzi_2\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_3\"><font color=\"#ec4899\">這</font></td><td id=\"m_hanzi_4\">點</td><td id=\"m_hanzi_5\">利益</td><td id=\"m_hanzi_6\">,</td><td id=\"m_hanzi_7\">去</td><td id=\"m_hanzi_8\">傷害</td><td id=\"m_hanzi_9\">別人</td><td id=\"m_hanzi_10\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wèile</td><td id=\"m_pinyin_1\">gèrén</td><td id=\"m_pinyin_2\">de</td><td id=\"m_pinyin_3\">zhè</td><td id=\"m_pinyin_4\">diǎn</td><td id=\"m_pinyin_5\">lìyì</td><td id=\"m_pinyin_6\"></td><td id=\"m_pinyin_7\">qù</td><td id=\"m_pinyin_8\">shānghài</td><td id=\"m_pinyin_9\">biérén</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chỉ vì</td><td id=\"m_nghia_1\">cá nhân</td><td id=\"m_nghia_2\">về</td><td id=\"m_nghia_3\">này</td><td id=\"m_nghia_4\">chút</td><td id=\"m_nghia_5\">lợi ích</td><td id=\"m_nghia_6\"></td><td id=\"m_nghia_7\">đi</td><td id=\"m_nghia_8\">làm hại</td><td id=\"m_nghia_9\">người khác</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">chỉ vì cá nhân </font><font color=\"#3b82f6\">về</font><font color=\"#000000\">&nbsp;chút lợi ích </font><font color=\"#ec4899\">này</font><font color=\"#000000\">, đi làm hại người khác,</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">chỉ vì chút đỉnh lợi ích cá nhân mà làm hại người khác;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"為了","audio":"[(wei4)(le)]","pinyin":"wèile","yueyin":"(guây` lơ)","nghia":"vì, chỉ vì"},{"hanzi":"個人","audio":"[(ge4)(ren2)]","pinyin":"gèrén","yueyin":"(cưa` rấn)","nghia":"cá nhân"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ sở hữu"},{"hanzi":"這","audio":"[(zhe4)]","pinyin":"zhè","yueyin":"(trưa`)","nghia":"này"},{"hanzi":"點","audio":"[(dian3)]","pinyin":"diǎn","yueyin":"(ti:ẻn)","nghia":"chút, ít"},{"hanzi":"利益","audio":"[(li4)(yi4)]","pinyin":"lìyì","yueyin":"(li` y`)","nghia":"lợi ích"},{"hanzi":"去","audio":"[(qu4)]","pinyin":"qù","yueyin":"(ch'uy`)","nghia":"đi (làm gì)"},{"hanzi":"傷害","audio":"[(shang1)(hai4)]","pinyin":"shānghài","yueyin":"(shang- hai`)","nghia":"làm hại, gây tổn thương"},{"hanzi":"別人","audio":"[(bie2)(ren2)]","pinyin":"biérén","yueyin":"(pi:ế rấn)","nghia":"người khác"}]
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