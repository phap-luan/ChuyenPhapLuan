/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d02-009",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d02-009)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ju3)(ge4)(li4)(zi)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(ying1)(guo2)(de)(xiao3)(xue2)(ke4)(ben3)]</td><td id=\"m_audio_3\">[(ni3)(xue2)(le)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(mei3)(guo2)(de)(xiao3)(xue2)(ke4)(ben3)]</td><td id=\"m_audio_6\">[(ni3)(xue2)(le)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(chủy)(cưa`)(li` zư)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(ying- cúa)(tơ)(xi:ảo xuế)(khưa` pẩn)</td><td id=\"m_yueyin_3\">(nỉ)(xuế)(lơ)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(mẩy cúa)(tơ)(xi:ảo xuế)(khưa` pẩn)</td><td id=\"m_yueyin_6\">(nỉ)(xuế)(lơ)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">舉個例子</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">英國的小學課本</td><td id=\"m_hanzi_3\">你學了</td><td id=\"m_hanzi_4\">;</td><td id=\"m_hanzi_5\">美國的小學課本</td><td id=\"m_hanzi_6\">你學了</td><td id=\"m_hanzi_7\">;</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">jǔ gè lìzi</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">yīngguó de xiǎoxué kèběn</td><td id=\"m_pinyin_3\">nǐ xué le</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">měiguó de xiǎoxué kèběn</td><td id=\"m_pinyin_6\">nǐ xué le</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">cử một ví dụ</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">Anh quốc về tiểu học khóa bản</td><td id=\"m_nghia_3\">bạn học rồi</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">Mỹ quốc về tiểu học khóa bản</td><td id=\"m_nghia_6\">bạn học rồi</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>cử một ví dụ, Anh quốc về tiểu học khóa bản bạn học rồi; Mỹ quốc về tiểu học khóa bản bạn học rồi;</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Lấy một thí dụ, sách tiểu học của Anh chư vị cũng học, sách tiểu học của Mỹ chư vị cũng học,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"舉個例子","audio":"[(ju3)(ge4)(li4)(zi)]","pinyin":"jǔ gè lìzi","yueyin":"(chủy)(cưa`)(li` zư)","nghia":"cử một ví dụ"},{"hanzi":"英國的小學課本","audio":"[(ying1)(guo2)(de)(xiao3)(xue2)(ke4)(ben3)]","pinyin":"yīngguó de xiǎoxué kèběn","yueyin":"(ying- cúa)(tơ)(xi:ảo xuế)(khưa` pẩn)","nghia":"Anh quốc về tiểu học khóa bản"},{"hanzi":"你學了","audio":"[(ni3)(xue2)(le)]","pinyin":"nǐ xué le","yueyin":"(nỉ)(xuế)(lơ)","nghia":"bạn học rồi"},{"hanzi":"美國的小學課本","audio":"[(mei3)(guo2)(de)(xiao3)(xue2)(ke4)(ben3)]","pinyin":"měiguó de xiǎoxué kèběn","yueyin":"(mẩy cúa)(tơ)(xi:ảo xuế)(khưa` pẩn)","nghia":"Mỹ quốc về tiểu học khóa bản"},{"hanzi":"你學了","audio":"[(ni3)(xue2)(le)]","pinyin":"nǐ xué le","yueyin":"(nỉ)(xuế)(lơ)","nghia":"bạn học rồi"}]
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