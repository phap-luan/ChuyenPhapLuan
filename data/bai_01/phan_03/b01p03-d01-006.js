/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d01-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d01-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(mo4)(fa3)(shi2)(qi1)]</td><td id=\"m_audio_1\">[(miao4)(li3)(de)(he2shang)]</td><td id=\"m_audio_2\">[(dou1)(hen3)(nan2)]</td><td id=\"m_audio_3\">[(zi4)(du4)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(he2)(kuang4)]</td><td id=\"m_audio_6\">[(du4)(ren2)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(mua` fả)(shí* ch'i-)</td><td id=\"m_yueyin_1\">(mi:ao`)(lỉ)(tơ)(hứa shang)</td><td id=\"m_yueyin_2\">(tâu-)(hẩn)(nán)</td><td id=\"m_yueyin_3\">(zư`* tu`)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(hứa khoang`)</td><td id=\"m_yueyin_6\">(tu`)(rấn)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">末法時期</td><td id=\"m_hanzi_1\">廟<font color=\"#f97316\">裏</font>的和尚</td><td id=\"m_hanzi_2\">都很難</td><td id=\"m_hanzi_3\">自度</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">何況</td><td id=\"m_hanzi_6\">度人</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">mòfǎ shíqī</td><td id=\"m_pinyin_1\">miào lǐ de héshang</td><td id=\"m_pinyin_2\">dōu hěn nán</td><td id=\"m_pinyin_3\">zìdù</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">hékuàng</td><td id=\"m_pinyin_6\">dù rén</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">mạt pháp thời kỳ</td><td id=\"m_nghia_1\"><font color=\"#f97316\">trong</font> chùa về hòa thượng</td><td id=\"m_nghia_2\">đều rất khó</td><td id=\"m_nghia_3\">tự độ</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">huống chi</td><td id=\"m_nghia_6\">độ nhân</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">mạt pháp thời kỳ </font><font color=\"#f97316\">trong</font><font color=\"#000000\"> chùa về hòa thượng đều rất khó tự độ, huống chi độ nhân.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Vào thời mạt Pháp, hoà thượng trong chùa tự độ còn rất khó, huống là độ nhân.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"末法時期","audio":"[(mo4)(fa3)(shi2)(qi1)]","pinyin":"mòfǎ shíqī","yueyin":"(mua` fả)(shí* ch'i-)","nghia":"mạt pháp thời kỳ"},{"hanzi":"廟裏的和尚","audio":"[(miao4)(li3)(de)(he2shang)]","pinyin":"miào lǐ de héshang","yueyin":"(mi:ao`)(lỉ)(tơ)(hứa shang)","nghia":"trong chùa về hòa thượng"},{"hanzi":"都很難","audio":"[(dou1)(hen3)(nan2)]","pinyin":"dōu hěn nán","yueyin":"(tâu-)(hẩn)(nán)","nghia":"đều rất khó"},{"hanzi":"自度","audio":"[(zi4)(du4)]","pinyin":"zìdù","yueyin":"(zư`* tu`)","nghia":"tự độ"},{"hanzi":"何況","audio":"[(he2)(kuang4)]","pinyin":"hékuàng","yueyin":"(hứa khoang`)","nghia":"huống chi"},{"hanzi":"度人","audio":"[(du4)(ren2)]","pinyin":"dù rén","yueyin":"(tu`)(rấn)","nghia":"độ nhân"}]
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