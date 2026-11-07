/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-011",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-011.mp3)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(mu4)(qian2)]</td><td id=\"m_audio_1\">[(zhi2)(you3)]</td><td id=\"m_audio_2\">[(wo3)]</td><td id=\"m_audio_3\">[(yi2)(ge4)(ren2)]</td><td id=\"m_audio_4\">[(zai4)]</td><td id=\"m_audio_5\">[(zuo4)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(mu` ch'i:én)</td><td id=\"m_yueyin_1\">(trí* yẩu)</td><td id=\"m_yueyin_2\">(gủa)</td><td id=\"m_yueyin_3\">(ý)(cưa`)(rấn)</td><td id=\"m_yueyin_4\">(zai`)</td><td id=\"m_yueyin_5\">(zua`)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">目前</td><td id=\"m_hanzi_1\">只有</td><td id=\"m_hanzi_2\">我</td><td id=\"m_hanzi_3\">一個人</td><td id=\"m_hanzi_4\">在</td><td id=\"m_hanzi_5\">做</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">mùqián</td><td id=\"m_pinyin_1\">zhǐyǒu</td><td id=\"m_pinyin_2\">wǒ</td><td id=\"m_pinyin_3\">yí gè rén</td><td id=\"m_pinyin_4\">zài</td><td id=\"m_pinyin_5\">zuò</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">trước mắt</td><td id=\"m_nghia_1\">chỉ có</td><td id=\"m_nghia_2\">tôi</td><td id=\"m_nghia_3\">một người</td><td id=\"m_nghia_4\">đang</td><td id=\"m_nghia_5\">làm</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>trước mắt chỉ có tôi một người đang làm.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">thì chỉ có mình cá nhân tôi đang làm.</span></p>\n      </div>",
    tableData: [{"hanzi":"目前","audio":"[(mu4)(qian2)]","pinyin":"mùqián","yueyin":"(mu` ch'i:én)","nghia":"trước mắt, hiện nay, hiện tại"},{"hanzi":"只有","audio":"[(zhi2)(you3)]","pinyin":"zhǐyǒu","yueyin":"(trí* yẩu)","nghia":"chỉ có"},{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"一個人","audio":"[(yi2)(ge4)(ren2)]","pinyin":"yí gè rén","yueyin":"(ý)(cưa`)(rấn)","nghia":"một người"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"đang (phó từ chỉ tiến hành)"},{"hanzi":"做","audio":"[(zuo4)]","pinyin":"zuò","yueyin":"(zua`)","nghia":"làm"}]
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