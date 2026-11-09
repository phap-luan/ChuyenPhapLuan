/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-015",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-015)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ren2)]</td><td id=\"m_audio_1\">[(zai4)]</td><td id=\"m_audio_2\">[(chang2)(ren2)]</td><td id=\"m_audio_3\">[(she4)(hui4)]</td><td id=\"m_audio_4\">[(zhong1)]</td><td id=\"m_audio_5\"></td><td id=\"m_audio_6\">[(ni3)(zheng1)(wo3)(duo2)]</td><td id=\"m_audio_7\"></td><td id=\"m_audio_8\">[(er3)(yu2)(wo3)(zha4)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(rấn)</td><td id=\"m_yueyin_1\">(zai`)</td><td id=\"m_yueyin_2\">(tr'áng rấn)</td><td id=\"m_yueyin_3\">(shưa` huây`)</td><td id=\"m_yueyin_4\">(trung-)</td><td id=\"m_yueyin_5\"></td><td id=\"m_yueyin_6\">(nỉ)(trâng-)(gủa)(túa)</td><td id=\"m_yueyin_7\"></td><td id=\"m_yueyin_8\">(ở)(úy)(gủa)(tra`)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">人</td><td id=\"m_hanzi_1\">在</td><td id=\"m_hanzi_2\">常人</td><td id=\"m_hanzi_3\">社會</td><td id=\"m_hanzi_4\">中</td><td id=\"m_hanzi_5\">,</td><td id=\"m_hanzi_6\">你爭我奪</td><td id=\"m_hanzi_7\">,</td><td id=\"m_hanzi_8\">爾虞我詐</td><td id=\"m_hanzi_9\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">rén</td><td id=\"m_pinyin_1\">zài</td><td id=\"m_pinyin_2\">chángrén</td><td id=\"m_pinyin_3\">shèhuì</td><td id=\"m_pinyin_4\">zhōng</td><td id=\"m_pinyin_5\"></td><td id=\"m_pinyin_6\">nǐ zhēng wǒ duó</td><td id=\"m_pinyin_7\"></td><td id=\"m_pinyin_8\">ěr yú wǒ zhà</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">con người</td><td id=\"m_nghia_1\">ở</td><td id=\"m_nghia_2\">người thường</td><td id=\"m_nghia_3\">xã hội</td><td id=\"m_nghia_4\">trong</td><td id=\"m_nghia_5\"></td><td id=\"m_nghia_6\">bạn tranh tôi đoạt</td><td id=\"m_nghia_7\"></td><td id=\"m_nghia_8\">ngươi lừa ta bịp</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">con người </font><font color=\"#3b82f6\">ở</font><font color=\"#000000\"> người thường xã hội </font><font color=\"#3b82f6\">trong</font><font color=\"#000000\">, bạn tranh tôi đoạt, ngươi lừa ta bịp,</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Con người trong xã hội người thường, kẻ tranh người đoạt, kẻ lừa người dối,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"人","audio":"[(ren2)]","pinyin":"rén","yueyin":"(rấn)","nghia":"con người"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"ở"},{"hanzi":"常人","audio":"[(chang2)(ren2)]","pinyin":"chángrén","yueyin":"(tr'áng rấn)","nghia":"người thường"},{"hanzi":"社會","audio":"[(she4)(hui4)]","pinyin":"shèhuì","yueyin":"(shưa` huây`)","nghia":"xã hội"},{"hanzi":"中","audio":"[(zhong1)]","pinyin":"zhōng","yueyin":"(trung-)","nghia":"trong"},{"hanzi":"你爭我奪","audio":"[(ni3)(zheng1)(wo3)(duo2)]","pinyin":"nǐ zhēng wǒ duó","yueyin":"(nỉ)(trâng-)(gủa)(túa)","nghia":"bạn tranh tôi đoạt (thành ngữ)"},{"hanzi":"爾虞我詐","audio":"[(er3)(yu2)(wo3)(zha4)]","pinyin":"ěr yú wǒ zhà","yueyin":"(ở)(úy)(gủa)(tra`)","nghia":"ngươi lừa ta bịp (thành ngữ)"}]
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