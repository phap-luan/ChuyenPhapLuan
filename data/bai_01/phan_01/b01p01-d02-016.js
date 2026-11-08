/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-016",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-016)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(da4)(jia1)]</td><td id=\"m_audio_1\">[(zuo4)]</td><td id=\"m_audio_2\">[(zai4)]</td><td id=\"m_audio_3\">[(zhe4)(li3)]</td><td id=\"m_audio_4\">[(dou1)]</td><td id=\"m_audio_5\">[(shi4)]</td><td id=\"m_audio_6\">[(yuan2)(fen4)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(ta` chi:a-)</td><td id=\"m_yueyin_1\">(zua`)</td><td id=\"m_yueyin_2\">(zai`)</td><td id=\"m_yueyin_3\">(trưa` lỉ)</td><td id=\"m_yueyin_4\">(tâu-)</td><td id=\"m_yueyin_5\">(shi*`)</td><td id=\"m_yueyin_6\">(doán fân`)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">大家</td><td id=\"m_hanzi_1\">坐</td><td id=\"m_hanzi_2\">在</td><td id=\"m_hanzi_3\">這裏</td><td id=\"m_hanzi_4\">都</td><td id=\"m_hanzi_5\">是</td><td id=\"m_hanzi_6\">緣份</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dàjiā</td><td id=\"m_pinyin_1\">zuò</td><td id=\"m_pinyin_2\">zài</td><td id=\"m_pinyin_3\">zhèlǐ</td><td id=\"m_pinyin_4\">dōu</td><td id=\"m_pinyin_5\">shì</td><td id=\"m_pinyin_6\">yuánfèn</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">mọi người</td><td id=\"m_nghia_1\">ngồi</td><td id=\"m_nghia_2\">tại</td><td id=\"m_nghia_3\">nơi đây</td><td id=\"m_nghia_4\">đều</td><td id=\"m_nghia_5\">là</td><td id=\"m_nghia_6\">duyên phận</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>mọi người ngồi tại nơi đây đều là duyên phận.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">mọi người ngồi tại đây đều là duyên phận.</span></p>\n      </div>",
    tableData: [{"hanzi":"大家","audio":"[(da4)(jia1)]","pinyin":"dàjiā","yueyin":"(ta` chi:a-)","nghia":"mọi người"},{"hanzi":"坐","audio":"[(zuo4)]","pinyin":"zuò","yueyin":"(zua`)","nghia":"ngồi"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"tại, ở"},{"hanzi":"這裏","audio":"[(zhe4)(li3)]","pinyin":"zhèlǐ","yueyin":"(trưa` lỉ)","nghia":"nơi đây, ở đây, nơi này (= 這裡)"},{"hanzi":"都","audio":"[(dou1)]","pinyin":"dōu","yueyin":"(tâu-)","nghia":"đều"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"緣份","audio":"[(yuan2)(fen4)]","pinyin":"yuánfèn","yueyin":"(doán fân`)","nghia":"duyên phận"}]
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