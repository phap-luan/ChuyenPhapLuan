/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d11-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d11-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(men)(jiang3)(yuan2)(fen4)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(da4)(jia1)]</td><td id=\"m_audio_3\">[(zuo4)(zai4)(zhe4)(li3)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(wo3)(ke2)(yi3)]</td><td id=\"m_audio_6\">[(gei3)(da4)(jia1)]</td><td id=\"m_audio_7\">[(zuo4)]</td><td id=\"m_audio_8\">[(zhe4)(jian4)(shi4qing)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa mân)(chi:ảng)(doán fân`)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(ta` chi:a-)</td><td id=\"m_yueyin_3\">(zua`)(zai`)(trưa` lỉ)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(gủa)(khứa ỷ)</td><td id=\"m_yueyin_6\">(cẩy)(ta` chi:a-)</td><td id=\"m_yueyin_7\">(zua`)</td><td id=\"m_yueyin_8\">(trưa`)(chi:en`)(shi*` ch'ing)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我們講緣份</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">大家</td><td id=\"m_hanzi_3\">坐在這裏</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">我可以</td><td id=\"m_hanzi_6\">給大家</td><td id=\"m_hanzi_7\">做</td><td id=\"m_hanzi_8\"><font color=\"#a855f7\">這</font>件事情</td><td id=\"m_hanzi_9\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒmen jiǎng yuánfèn</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">dàjiā</td><td id=\"m_pinyin_3\">zuò zài zhèlǐ</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">wǒ kěyǐ</td><td id=\"m_pinyin_6\">gěi dàjiā</td><td id=\"m_pinyin_7\">zuò</td><td id=\"m_pinyin_8\">zhè jiàn shìqing</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chúng tôi giảng duyên phận</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">mọi người</td><td id=\"m_nghia_3\">ngồi ở nơi đây</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">tôi có thể</td><td id=\"m_nghia_6\">giúp mọi người</td><td id=\"m_nghia_7\">làm</td><td id=\"m_nghia_8\">kiện sự tình này</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">chúng tôi giảng duyên phận, mọi người ngồi ở nơi đây, tôi có thể giúp mọi người làm kiện sự tình </font><font color=\"#a855f7\">này</font><font color=\"#000000\">.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Chúng tôi giảng duyên phận; với mọi người ngồi đây, tôi có thể làm cho mọi người những sự việc này.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我們講緣份","audio":"[(wo3)(men)(jiang3)(yuan2)(fen4)]","pinyin":"wǒmen jiǎng yuánfèn","yueyin":"(gủa mân)(chi:ảng)(doán fân`)","nghia":"chúng tôi giảng duyên phận"},{"hanzi":"大家","audio":"[(da4)(jia1)]","pinyin":"dàjiā","yueyin":"(ta` chi:a-)","nghia":"mọi người"},{"hanzi":"坐在這裏","audio":"[(zuo4)(zai4)(zhe4)(li3)]","pinyin":"zuò zài zhèlǐ","yueyin":"(zua`)(zai`)(trưa` lỉ)","nghia":"ngồi ở nơi đây"},{"hanzi":"我可以","audio":"[(wo3)(ke2)(yi3)]","pinyin":"wǒ kěyǐ","yueyin":"(gủa)(khứa ỷ)","nghia":"tôi có thể"},{"hanzi":"給大家","audio":"[(gei3)(da4)(jia1)]","pinyin":"gěi dàjiā","yueyin":"(cẩy)(ta` chi:a-)","nghia":"giúp mọi người"},{"hanzi":"做","audio":"[(zuo4)]","pinyin":"zuò","yueyin":"(zua`)","nghia":"làm"},{"hanzi":"這件事情","audio":"[(zhe4)(jian4)(shi4qing)]","pinyin":"zhè jiàn shìqing","yueyin":"(trưa`)(chi:en`)(shi*` ch'ing)","nghia":"kiện sự tình này"}]
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