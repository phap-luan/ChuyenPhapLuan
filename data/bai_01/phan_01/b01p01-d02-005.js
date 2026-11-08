/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-005)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ru2)(guo3)]</td><td id=\"m_audio_1\">[(ni3)]</td><td id=\"m_audio_2\">[(bao4zhe)]</td><td id=\"m_audio_3\">[(ge4)(zhong3)]</td><td id=\"m_audio_4\">[(zhi2)(zhuo2)(xin1)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(rú của)</td><td id=\"m_yueyin_1\">(nỉ)</td><td id=\"m_yueyin_2\">(pao` trơ)</td><td id=\"m_yueyin_3\">(cưa` trủng)</td><td id=\"m_yueyin_4\">(trí* trúa)(xin-)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">如果</td><td id=\"m_hanzi_1\">你</td><td id=\"m_hanzi_2\">抱著</td><td id=\"m_hanzi_3\">各種</td><td id=\"m_hanzi_4\">執著心</td><td id=\"m_hanzi_5\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">rúguǒ</td><td id=\"m_pinyin_1\">nǐ</td><td id=\"m_pinyin_2\">bàozhe</td><td id=\"m_pinyin_3\">gèzhǒng</td><td id=\"m_pinyin_4\">zhízhuó xīn</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nếu như</td><td id=\"m_nghia_1\">bạn</td><td id=\"m_nghia_2\">ôm</td><td id=\"m_nghia_3\">các chủng</td><td id=\"m_nghia_4\">chấp trước tâm</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>nếu như bạn ôm các chủng chấp trước tâm,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Nếu chư vị ôm giữ các chủng tâm chấp trước,</span></p>\n      </div>",
    tableData: [{"hanzi":"如果","audio":"[(ru2)(guo3)]","pinyin":"rúguǒ","yueyin":"(rú của)","nghia":"nếu như"},{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"抱著","audio":"[(bao4zhe)]","pinyin":"bàozhe","yueyin":"(pao` trơ)","nghia":"ôm, mang (著:nhấn mạnh)"},{"hanzi":"各種","audio":"[(ge4)(zhong3)]","pinyin":"gèzhǒng","yueyin":"(cưa` trủng)","nghia":"đủ loại, các loại, các chủng"},{"hanzi":"執著心","audio":"[(zhi2)(zhuo2)(xin1)]","pinyin":"zhízhuó xīn","yueyin":"(trí* trúa)(xin-)","nghia":"chấp trước tâm"}]
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