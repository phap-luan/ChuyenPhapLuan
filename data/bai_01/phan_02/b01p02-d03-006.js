/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(chan2)(zong1)(da2)(mo2)]</td><td id=\"m_audio_1\">[(chuan2)]</td><td id=\"m_audio_2\">[(zhe4)(ge)(dong1)(xi)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(shi4)(gen1)(ju4)]</td><td id=\"m_audio_5\">[(shi4)(jia1)(mou2)(ni2)]</td><td id=\"m_audio_6\">[(shuo1)(de)]</td><td id=\"m_audio_7\">[(yi2)(ju4)(hua4)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tr'án zung-)(tá múa)</td><td id=\"m_yueyin_1\">(tr'oán)</td><td id=\"m_yueyin_2\">(trưa` cưa)(tung- xi)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(shi*`)(cân- chuy`)</td><td id=\"m_yueyin_5\">(shi*` chi:a- mấu ní)</td><td id=\"m_yueyin_6\">(shua-)(tơ)</td><td id=\"m_yueyin_7\">(ý)(chuy`)(hoa`)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">禪宗達摩</td><td id=\"m_hanzi_1\">傳</td><td id=\"m_hanzi_2\">這個東西</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">是根據</td><td id=\"m_hanzi_5\">釋迦牟尼</td><td id=\"m_hanzi_6\">說的</td><td id=\"m_hanzi_7\">一句話</td><td id=\"m_hanzi_8\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">chánzōng dámó</td><td id=\"m_pinyin_1\">chuán</td><td id=\"m_pinyin_2\">zhège dōngxi</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">shì gēnjù</td><td id=\"m_pinyin_5\">shìjiāmóuní</td><td id=\"m_pinyin_6\">shuō de</td><td id=\"m_pinyin_7\">yí jù huà</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">Thiền tông Đạt Ma</td><td id=\"m_nghia_1\">truyền</td><td id=\"m_nghia_2\">điều này</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">là căn cứ</td><td id=\"m_nghia_5\">Thích Ca Mâu Ni</td><td id=\"m_nghia_6\">thuyết về</td><td id=\"m_nghia_7\">một câu thoại</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>Thiền tông Đạt Ma truyền điều này, là căn cứ Thích Ca Mâu Ni thuyết về một câu thoại.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Đạt Ma [bên] Thiền tông truyền [dạy] điều ấy; [đó] là căn cứ theo một câu của Thích Ca Mâu Ni.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"禪宗達摩","audio":"[(chan2)(zong1)(da2)(mo2)]","pinyin":"chánzōng dámó","yueyin":"(tr'án zung-)(tá múa)","nghia":"Thiền tông Đạt Ma"},{"hanzi":"傳","audio":"[(chuan2)]","pinyin":"chuán","yueyin":"(tr'oán)","nghia":"truyền"},{"hanzi":"這個東西","audio":"[(zhe4)(ge)(dong1)(xi)]","pinyin":"zhège dōngxi","yueyin":"(trưa` cưa)(tung- xi)","nghia":"nội dung này, điều này"},{"hanzi":"是根據","audio":"[(shi4)(gen1)(ju4)]","pinyin":"shì gēnjù","yueyin":"(shi*`)(cân- chuy`)","nghia":"là căn cứ"},{"hanzi":"釋迦牟尼","audio":"[(shi4)(jia1)(mou2)(ni2)]","pinyin":"shìjiāmóuní","yueyin":"(shi*` chi:a- mấu ní)","nghia":"Thích Ca Mâu Ni"},{"hanzi":"說的","audio":"[(shuo1)(de)]","pinyin":"shuō de","yueyin":"(shua-)(tơ)","nghia":"thuyết về, nói về"},{"hanzi":"一句話","audio":"[(yi2)(ju4)(hua4)]","pinyin":"yí jù huà","yueyin":"(ý)(chuy`)(hoa`)","nghia":"một câu thoại"}]
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