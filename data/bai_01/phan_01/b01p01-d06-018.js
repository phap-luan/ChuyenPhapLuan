/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-018",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-018)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)(men)]</td><td id=\"m_audio_1\">[(hai2)]</td><td id=\"m_audio_2\">[(dai1)(bu)(liao3)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(jiu4)]</td><td id=\"m_audio_5\">[(ji4)(xu4)]</td><td id=\"m_audio_6\">[(wang3)(xia4)]</td><td id=\"m_audio_7\">[(diao4)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha- mân)</td><td id=\"m_yueyin_1\">(hái)</td><td id=\"m_yueyin_2\">(tai-)(pu)(li:ảo)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(chi:âu`)</td><td id=\"m_yueyin_5\">(chi` xuy`)</td><td id=\"m_yueyin_6\">(goảng)(xi:a`)</td><td id=\"m_yueyin_7\">(ti:ao`)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他們</td><td id=\"m_hanzi_1\">還</td><td id=\"m_hanzi_2\">呆不了</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">就</td><td id=\"m_hanzi_5\">繼續</td><td id=\"m_hanzi_6\">往下</td><td id=\"m_hanzi_7\">掉</td><td id=\"m_hanzi_8\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tāmen</td><td id=\"m_pinyin_1\">hái</td><td id=\"m_pinyin_2\">dāi bu liǎo</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">jiù</td><td id=\"m_pinyin_5\">jìxù</td><td id=\"m_pinyin_6\">wǎng xià</td><td id=\"m_pinyin_7\">diào</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">họ</td><td id=\"m_nghia_1\">vẫn</td><td id=\"m_nghia_2\">không nán lại nổi</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">liền</td><td id=\"m_nghia_5\">tiếp tục</td><td id=\"m_nghia_6\">xuống dưới</td><td id=\"m_nghia_7\">rớt</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>họ vẫn không nán lại nổi, liền tiếp tục xuống dưới rớt,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">họ không thể ở lại, và tiếp tục rớt xuống dưới;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"他們","audio":"[(ta1)(men)]","pinyin":"tāmen","yueyin":"(tha- mân)","nghia":"họ"},{"hanzi":"還","audio":"[(hai2)]","pinyin":"hái","yueyin":"(hái)","nghia":"vẫn"},{"hanzi":"呆不了","audio":"[(dai1)(bu)(liao3)]","pinyin":"dāi bu liǎo","yueyin":"(tai-)(pu)(li:ảo)","nghia":"không nán lại nổi"},{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"sẽ, liền, thì"},{"hanzi":"繼續","audio":"[(ji4)(xu4)]","pinyin":"jìxù","yueyin":"(chi` xuy`)","nghia":"tiếp tục"},{"hanzi":"往下","audio":"[(wang3)(xia4)]","pinyin":"wǎng xià","yueyin":"(goảng)(xi:a`)","nghia":"xuống dưới"},{"hanzi":"掉","audio":"[(diao4)]","pinyin":"diào","yueyin":"(ti:ao`)","nghia":"rơi, rớt"}]
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