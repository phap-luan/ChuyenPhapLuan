/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d04-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d04-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\"></td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(wo3)]</td><td id=\"m_audio_3\">[(zhe4)(li3)]</td><td id=\"m_audio_4\">[(bu4)]</td><td id=\"m_audio_5\">[(jiang3)]</td><td id=\"m_audio_6\">[(zhi4)(bing4)]</td><td id=\"m_audio_7\"></td><td id=\"m_audio_8\">[(wo3)(men)]</td><td id=\"m_audio_9\">[(ye3)]</td><td id=\"m_audio_10\">[(bu4)]</td><td id=\"m_audio_11\">[(zhi4)(bing4)]</td><td id=\"m_audio_12\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\"></td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(gủa)</td><td id=\"m_yueyin_3\">(trưa` lỉ)</td><td id=\"m_yueyin_4\">(pu`)</td><td id=\"m_yueyin_5\">(chi:ảng)</td><td id=\"m_yueyin_6\">(tri*` ping`)</td><td id=\"m_yueyin_7\"></td><td id=\"m_yueyin_8\">(gủa mân)</td><td id=\"m_yueyin_9\">(yể)</td><td id=\"m_yueyin_10\">(pu`)</td><td id=\"m_yueyin_11\">(tri*` ping`)</td><td id=\"m_yueyin_12\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"> </td><td id=\"m_hanzi_1\"> </td><td id=\"m_hanzi_2\">我</td><td id=\"m_hanzi_3\">這裏</td><td id=\"m_hanzi_4\">不</td><td id=\"m_hanzi_5\">講</td><td id=\"m_hanzi_6\">治病</td><td id=\"m_hanzi_7\">,</td><td id=\"m_hanzi_8\">我們</td><td id=\"m_hanzi_9\">也</td><td id=\"m_hanzi_10\">不</td><td id=\"m_hanzi_11\">治病</td><td id=\"m_hanzi_12\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\"></td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">wǒ</td><td id=\"m_pinyin_3\">zhèlǐ</td><td id=\"m_pinyin_4\">bù</td><td id=\"m_pinyin_5\">jiǎng</td><td id=\"m_pinyin_6\">zhìbìng</td><td id=\"m_pinyin_7\"></td><td id=\"m_pinyin_8\">wǒmen</td><td id=\"m_pinyin_9\">yě</td><td id=\"m_pinyin_10\">bù</td><td id=\"m_pinyin_11\">zhìbìng</td><td id=\"m_pinyin_12\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\"></td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">tôi</td><td id=\"m_nghia_3\">ở đây</td><td id=\"m_nghia_4\">không</td><td id=\"m_nghia_5\">giảng</td><td id=\"m_nghia_6\">trị bệnh</td><td id=\"m_nghia_7\"></td><td id=\"m_nghia_8\">chúng tôi</td><td id=\"m_nghia_9\">cũng</td><td id=\"m_nghia_10\">không</td><td id=\"m_nghia_11\">trị bệnh</td><td id=\"m_nghia_12\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>&nbsp;tôi ở đây không giảng trị bệnh, chúng tôi cũng không trị bệnh.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Ở đây tôi không giảng trị bệnh; chúng tôi cũng không trị bệnh.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"這裏","audio":"[(zhe4)(li3)]","pinyin":"zhèlǐ","yueyin":"(trưa` lỉ)","nghia":"ở đây, chỗ này"},{"hanzi":"不","audio":"[(bu4)]","pinyin":"bù","yueyin":"(pu`)","nghia":"không"},{"hanzi":"講","audio":"[(jiang3)]","pinyin":"jiǎng","yueyin":"(chi:ảng)","nghia":"nói đến, đề cập, giảng"},{"hanzi":"治病","audio":"[(zhi4)(bing4)]","pinyin":"zhìbìng","yueyin":"(tri*` ping`)","nghia":"trị bệnh"},{"hanzi":"我們","audio":"[(wo3)(men)]","pinyin":"wǒmen","yueyin":"(gủa mân)","nghia":"chúng tôi"},{"hanzi":"也","audio":"[(ye3)]","pinyin":"yě","yueyin":"(yể)","nghia":"cũng"},{"hanzi":"不","audio":"[(bu4)]","pinyin":"bù","yueyin":"(pu`)","nghia":"không"},{"hanzi":"治病","audio":"[(zhi4)(bing4)]","pinyin":"zhìbìng","yueyin":"(tri*` ping`)","nghia":"trị bệnh"}]
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