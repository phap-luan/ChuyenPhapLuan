/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-020",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-020)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ba3)]</td><td id=\"m_audio_1\">[(zi4)(ji3)]</td><td id=\"m_audio_2\">[(de)]</td><td id=\"m_audio_3\">[(shen1)(ti3)]</td><td id=\"m_audio_4\">[(gao3)]</td><td id=\"m_audio_5\">[(de)]</td><td id=\"m_audio_6\">[(luan4)(qi1)(ba1)(zao1)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(pả)</td><td id=\"m_yueyin_1\">(zư`* chỉ)</td><td id=\"m_yueyin_2\">(tơ)</td><td id=\"m_yueyin_3\">(shân- thỉ)</td><td id=\"m_yueyin_4\">(cảo)</td><td id=\"m_yueyin_5\">(tơ)</td><td id=\"m_yueyin_6\">(loan` ch'i- pa- zao-)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">把</td><td id=\"m_hanzi_1\">自己</td><td id=\"m_hanzi_2\">的</td><td id=\"m_hanzi_3\">身體</td><td id=\"m_hanzi_4\">搞</td><td id=\"m_hanzi_5\">的</td><td id=\"m_hanzi_6\">亂七八糟</td><td id=\"m_hanzi_7\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">bǎ</td><td id=\"m_pinyin_1\">zìjǐ</td><td id=\"m_pinyin_2\">de</td><td id=\"m_pinyin_3\">shēntǐ</td><td id=\"m_pinyin_4\">gǎo</td><td id=\"m_pinyin_5\">de</td><td id=\"m_pinyin_6\">luànqībāzāo</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đem</td><td id=\"m_nghia_1\">của mình</td><td id=\"m_nghia_2\">&nbsp;về</td><td id=\"m_nghia_3\">thân thể</td><td id=\"m_nghia_4\">làm</td><td id=\"m_nghia_5\">thành</td><td id=\"m_nghia_6\">loạn thất bát tao</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>đem của mình&nbsp; về thân thể làm thành loạn thất bát tao,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">đã làm thân thể của mình loạn lung tung hỏng cả;</span></p>\n      </div>",
    tableData: [{"hanzi":"把","audio":"[(ba3)]","pinyin":"bǎ","yueyin":"(pả)","nghia":"mang, đem, lấy"},{"hanzi":"自己","audio":"[(zi4)(ji3)]","pinyin":"zìjǐ","yueyin":"(zư`* chỉ)","nghia":"bản thân, của mình"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ sở hữu (自己的身體)"},{"hanzi":"身體","audio":"[(shen1)(ti3)]","pinyin":"shēntǐ","yueyin":"(shân- thỉ)","nghia":"thân thể, cơ thể"},{"hanzi":"搞","audio":"[(gao3)]","pinyin":"gǎo","yueyin":"(cảo)","nghia":"làm, gây ra (khẩu ngữ)"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ kết quả = 得 (de)"},{"hanzi":"亂七八糟","audio":"[(luan4)(qi1)(ba1)(zao1)]","pinyin":"luànqībāzāo","yueyin":"(loan` ch'i- pa- zao-)","nghia":"loạn thất bát tao (thành ngữ): lộn xộn, rối tung"}]
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