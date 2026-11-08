/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-019",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-019)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)]</td><td id=\"m_audio_1\">[(jin1)(tian1)]</td><td id=\"m_audio_2\">[(xue2)]</td><td id=\"m_audio_3\">[(zhe4)(ge)(gong1)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(ming2)(tian1)]</td><td id=\"m_audio_6\">[(xue2)]</td><td id=\"m_audio_7\">[(na4)(ge)(gong1)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha-)</td><td id=\"m_yueyin_1\">(chin- thi:en-)</td><td id=\"m_yueyin_2\">(xuế)</td><td id=\"m_yueyin_3\">(trưa` cưa)(cung-)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(míng thi:en-)</td><td id=\"m_yueyin_6\">(xuế)</td><td id=\"m_yueyin_7\">(na` cưa)(cung-)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他</td><td id=\"m_hanzi_1\">今天</td><td id=\"m_hanzi_2\">學</td><td id=\"m_hanzi_3\">這個功</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">明天</td><td id=\"m_hanzi_6\">學</td><td id=\"m_hanzi_7\">那個功</td><td id=\"m_hanzi_8\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tā</td><td id=\"m_pinyin_1\">jīntiān</td><td id=\"m_pinyin_2\">xué</td><td id=\"m_pinyin_3\">zhège gōng</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">míngtiān</td><td id=\"m_pinyin_6\">xué</td><td id=\"m_pinyin_7\">nàge gōng</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">anh ta</td><td id=\"m_nghia_1\">hôm nay</td><td id=\"m_nghia_2\">học</td><td id=\"m_nghia_3\">cái công này</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">ngày mai</td><td id=\"m_nghia_6\">học</td><td id=\"m_nghia_7\">cái công kia</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>anh ta hôm nay học cái công này, ngày mai học cái công kia,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">họ nay học công này, mai học công khác,</span></p>\n      </div>",
    tableData: [{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"anh ta"},{"hanzi":"今天","audio":"[(jin1)(tian1)]","pinyin":"jīntiān","yueyin":"(chin- thi:en-)","nghia":"hôm nay"},{"hanzi":"學","audio":"[(xue2)]","pinyin":"xué","yueyin":"(xuế)","nghia":"học"},{"hanzi":"這個功","audio":"[(zhe4)(ge)(gong1)]","pinyin":"zhège gōng","yueyin":"(trưa` cưa)(cung-)","nghia":"cái công này"},{"hanzi":"明天","audio":"[(ming2)(tian1)]","pinyin":"míngtiān","yueyin":"(míng thi:en-)","nghia":"ngày mai"},{"hanzi":"學","audio":"[(xue2)]","pinyin":"xué","yueyin":"(xuế)","nghia":"học"},{"hanzi":"那個功","audio":"[(na4)(ge)(gong1)]","pinyin":"nàge gōng","yueyin":"(na` cưa)(cung-)","nghia":"cái công kia"}]
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