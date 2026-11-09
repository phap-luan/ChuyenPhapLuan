/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d04-009",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d04-009)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(sheng1)(lao3)(bing4)(si3)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(zai4)]</td><td id=\"m_audio_3\">[(chang2)(ren2)]</td><td id=\"m_audio_4\">[(jiu4)(shi4)]</td><td id=\"m_audio_5\">[(zhe4)(yang4)]</td><td id=\"m_audio_6\">[(cun2)(zai4)]</td><td id=\"m_audio_7\">[(de)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shâng-)(lảo)(ping`)(sử)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(zai`)</td><td id=\"m_yueyin_3\">(tr'áng rấn)</td><td id=\"m_yueyin_4\">(chi:âu` shi*`)</td><td id=\"m_yueyin_5\">(trưa` yang`)</td><td id=\"m_yueyin_6\">(s'uấn zai`)</td><td id=\"m_yueyin_7\">(tơ)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">生老病死</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">在</td><td id=\"m_hanzi_3\">常人</td><td id=\"m_hanzi_4\">就是</td><td id=\"m_hanzi_5\">這樣</td><td id=\"m_hanzi_6\">存在</td><td id=\"m_hanzi_7\">的</td><td id=\"m_hanzi_8\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shēng lǎo bìng sǐ</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">zài</td><td id=\"m_pinyin_3\">chángrén</td><td id=\"m_pinyin_4\">jiùshì</td><td id=\"m_pinyin_5\">zhèyàng</td><td id=\"m_pinyin_6\">cúnzài</td><td id=\"m_pinyin_7\">de</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">sinh, lão, bệnh, tử</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">ở</td><td id=\"m_nghia_3\">người thường</td><td id=\"m_nghia_4\">chính là</td><td id=\"m_nghia_5\">như thế</td><td id=\"m_nghia_6\">tồn tại</td><td id=\"m_nghia_7\">nhấn mạnh</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">sinh lão bệnh tử,&nbsp; ở người thường chính là như thế tồn tại </b><i style=\"\"><font color=\"#3b82f6\">nhấn mạnh</font></i><b style=\"color: rgb(0, 0, 0);\">.</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">sinh lão bệnh tử, [chúng] tồn tại đúng như vậy ở [cõi] người thường.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"生老病死","audio":"[(sheng1)(lao3)(bing4)(si3)]","pinyin":"shēng lǎo bìng sǐ","yueyin":"(shâng-)(lảo)(ping`)(sử)","nghia":"sinh, lão, bệnh, tử"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"ở (trong phạm vi)"},{"hanzi":"常人","audio":"[(chang2)(ren2)]","pinyin":"chángrén","yueyin":"(tr'áng rấn)","nghia":"người thường"},{"hanzi":"就是","audio":"[(jiu4)(shi4)]","pinyin":"jiùshì","yueyin":"(chi:âu` shi*`)","nghia":"chính là"},{"hanzi":"這樣","audio":"[(zhe4)(yang4)]","pinyin":"zhèyàng","yueyin":"(trưa` yang`)","nghia":"như thế này"},{"hanzi":"存在","audio":"[(cun2)(zai4)]","pinyin":"cúnzài","yueyin":"(s'uấn zai`)","nghia":"tồn tại"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ cuối trong cấu trúc 是…的"}]
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