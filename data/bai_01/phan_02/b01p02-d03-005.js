/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-005)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(suo2)(yi3)]</td><td id=\"m_audio_1\">[(chan2)(zong1)]</td><td id=\"m_audio_2\">[(dao4)(jin1)(tian1)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(shen2)(me)(fa3)(dou1)]</td><td id=\"m_audio_5\">[(jiang3)(bu4)(liao3)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(sủa ỷ)</td><td id=\"m_yueyin_1\">(tr'án zung-)</td><td id=\"m_yueyin_2\">(tao`)(chin- thi:en-)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(shấn mơ)(fả)(tâu-)</td><td id=\"m_yueyin_5\">(chi:ảng)(pu`)(li:ảo)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">所以</td><td id=\"m_hanzi_1\">禪宗</td><td id=\"m_hanzi_2\">到今天</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">甚麼法都</td><td id=\"m_hanzi_5\">講不了</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">suǒyǐ</td><td id=\"m_pinyin_1\">chánzōng</td><td id=\"m_pinyin_2\">dào jīntiān</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">shénme fǎ dōu</td><td id=\"m_pinyin_5\">jiǎng bù liǎo</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">cho nên</td><td id=\"m_nghia_1\">Thiền tông</td><td id=\"m_nghia_2\">đến hôm nay</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">Pháp nào cũng</td><td id=\"m_nghia_5\">giảng không nổi</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>cho nên Thiền tông đến hôm nay, Pháp nào cũng giảng không nổi.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">vậy nên đến ngày nay Thiền tông không giảng Pháp gì hết.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"所以","audio":"[(suo2)(yi3)]","pinyin":"suǒyǐ","yueyin":"(sủa ỷ)","nghia":"cho nên"},{"hanzi":"禪宗","audio":"[(chan2)(zong1)]","pinyin":"chánzōng","yueyin":"(tr'án zung-)","nghia":"Thiền tông"},{"hanzi":"到今天","audio":"[(dao4)(jin1)(tian1)]","pinyin":"dào jīntiān","yueyin":"(tao`)(chin- thi:en-)","nghia":"đến hôm nay"},{"hanzi":"甚麼法都","audio":"[(shen2)(me)(fa3)(dou1)]","pinyin":"shénme fǎ dōu","yueyin":"(shấn mơ)(fả)(tâu-)","nghia":"Pháp nào cũng"},{"hanzi":"講不了","audio":"[(jiang3)(bu4)(liao3)]","pinyin":"jiǎng bù liǎo","yueyin":"(chi:ảng)(pu`)(li:ảo)","nghia":"giảng không nổi"}]
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