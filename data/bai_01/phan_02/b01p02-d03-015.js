/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-015",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-015)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhe4)(jiu4)(shi4)]</td><td id=\"m_audio_1\">[(niu2)(jiao3)(jian1)]</td><td id=\"m_audio_2\">[(yi3)(jing1)(zuan1)(dao4)(tou2)(le)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(zai4)(ye3)(mei2)(you3)]</td><td id=\"m_audio_5\">[(shen2)(me)(ke2)(jiang3)(de)(le)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trưa`)(chi:âu`)(shi*`)</td><td id=\"m_yueyin_1\">(ni:ấu chi:ảo chi:en-)</td><td id=\"m_yueyin_2\">(ỷ ching-)(zoan-)(tao`)(thấu)(lơ)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(zai`)(yể)(mấy yẩu)</td><td id=\"m_yueyin_5\">(shấn mơ)(khửa)(chi:ảng)(tơ)(lơ)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">這就是</td><td id=\"m_hanzi_1\">牛角尖</td><td id=\"m_hanzi_2\">已經鑽到頭了</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">再也沒有</td><td id=\"m_hanzi_5\">甚麼可講的了</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhè jiù shì</td><td id=\"m_pinyin_1\">niújiǎojiān</td><td id=\"m_pinyin_2\">yǐjīng zuān dào tóu le</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">zài yě méiyǒu</td><td id=\"m_pinyin_5\">shénme kě jiǎng de le</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đây chính là</td><td id=\"m_nghia_1\">sừng bò</td><td id=\"m_nghia_2\">đã khoan đến đầu rồi</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">lại cũng không có</td><td id=\"m_nghia_5\">cái gì để giảng được nữa</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>đây chính là sừng bò đã khoan đến đầu rồi, lại cũng không có cái gì để giảng được nữa.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Đó là cái sừng bò kia đã dùi đến đỉnh rồi, không còn gì có thể giảng nữa.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"這就是","audio":"[(zhe4)(jiu4)(shi4)]","pinyin":"zhè jiù shì","yueyin":"(trưa`)(chi:âu`)(shi*`)","nghia":"đây chính là"},{"hanzi":"牛角尖","audio":"[(niu2)(jiao3)(jian1)]","pinyin":"niújiǎojiān","yueyin":"(ni:ấu chi:ảo chi:en-)","nghia":"sừng bò (ngõ cụt)"},{"hanzi":"已經鑽到頭了","audio":"[(yi3)(jing1)(zuan1)(dao4)(tou2)(le)]","pinyin":"yǐjīng zuān dào tóu le","yueyin":"(ỷ ching-)(zoan-)(tao`)(thấu)(lơ)","nghia":"đã khoan đến đầu rồi"},{"hanzi":"再也沒有","audio":"[(zai4)(ye3)(mei2)(you3)]","pinyin":"zài yě méiyǒu","yueyin":"(zai`)(yể)(mấy yẩu)","nghia":"lại cũng không có"},{"hanzi":"甚麼可講的了","audio":"[(shen2)(me)(ke2)(jiang3)(de)(le)]","pinyin":"shénme kě jiǎng de le","yueyin":"(shấn mơ)(khửa)(chi:ảng)(tơ)(lơ)","nghia":"cái gì để giảng được nữa"}]
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