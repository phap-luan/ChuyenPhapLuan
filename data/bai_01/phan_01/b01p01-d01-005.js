/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-005)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(qian2)(xie1)(nian2)]</td><td id=\"m_audio_1\">[(you3)(xu3)(duo1)]</td><td id=\"m_audio_2\">[(qi4)(gong1)(shi1)]</td><td id=\"m_audio_3\">[(chuan2)(fa3)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(ch'i:én)(xi:ê-)(ni:én)</td><td id=\"m_yueyin_1\">(yẩu)(xủy tua-)</td><td id=\"m_yueyin_2\">(ch'i` cung-)(shi*-)</td><td id=\"m_yueyin_3\">(tr'oán)(fả)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">前些年</td><td id=\"m_hanzi_1\">有許多</td><td id=\"m_hanzi_2\">氣功師</td><td id=\"m_hanzi_3\">傳功</td><td id=\"m_hanzi_4\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">qián xiē nián</td><td id=\"m_pinyin_1\">yǒu xǔduō</td><td id=\"m_pinyin_2\">qìgōng shī</td><td id=\"m_pinyin_3\">chuán fǎ</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">mấy năm trước</td><td id=\"m_nghia_1\">có rất nhiều</td><td id=\"m_nghia_2\">khí công sư</td><td id=\"m_nghia_3\">truyền pháp</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>mấy năm trước có rất nhiều khí công sư truyền pháp,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Vài năm trước có rất nhiều khí công sư truyền công;</span></p>\n      </div>",
    tableData: [{"hanzi":"前些年","audio":"[(qian2)(xie1)(nian2)]","pinyin":"qián xiē nián","yueyin":"(ch'i:én)(xi:ê-)(ni:én)","nghia":"mấy năm trước"},{"hanzi":"有許多","audio":"[(you3)(xu3)(duo1)]","pinyin":"yǒu xǔduō","yueyin":"(yẩu)(xủy tua-)","nghia":"có rất nhiều"},{"hanzi":"氣功師","audio":"[(qi4)(gong1)(shi1)]","pinyin":"qìgōng shī","yueyin":"(ch'i` cung-)(shi*-)","nghia":"khí công sư"},{"hanzi":"傳功","audio":"[(chuan2)(fa3)]","pinyin":"chuán fǎ","yueyin":"(tr'oán)(fả)","nghia":"truyền pháp"}]
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