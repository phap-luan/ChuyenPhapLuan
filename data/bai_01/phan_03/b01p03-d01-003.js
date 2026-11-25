/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d01-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d01-003)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(shi4)(jia1)(mou2)(ni2)(jiang3)(de)(fa3)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(zhi3)(shi4)]</td><td id=\"m_audio_3\">[(zai4)(er4)(qian1)(wu3)(bai3)(nian2)(qian2)]</td><td id=\"m_audio_4\">[(gei3)]</td><td id=\"m_audio_5\">[(ceng2)(ci4)(ji2)(di1)]</td><td id=\"m_audio_6\">[(de)(na4)(zhong3)(chang2)(ren2)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shi*` chi:a-)(mấu ní)(chi:ảng)(tơ)(fả)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(trỉ* shi*`)</td><td id=\"m_yueyin_3\">(zai`)(ơ` ch'i:en-)(ủ pải)(ni:én)(ch'i:én)</td><td id=\"m_yueyin_4\">(cẩy)</td><td id=\"m_yueyin_5\">(s'ấng s'ư`)(chí)(ti-)</td><td id=\"m_yueyin_6\">(tơ)(na`)(trủng)(tr'áng rấn)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">釋迦牟尼講的法</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">只是</td><td id=\"m_hanzi_3\">在二千五百年前</td><td id=\"m_hanzi_4\">給</td><td id=\"m_hanzi_5\">層次極低</td><td id=\"m_hanzi_6\"><font color=\"#f97316\">的</font>那種常人</td><td id=\"m_hanzi_7\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shìjiā móuní jiǎng de fǎ</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">zhǐshì</td><td id=\"m_pinyin_3\">zài èrqiān wǔbǎi nián qián</td><td id=\"m_pinyin_4\">gěi</td><td id=\"m_pinyin_5\">céngcì jí dī</td><td id=\"m_pinyin_6\">de nà zhǒng chángrén</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">Thích Ca Mâu Ni giảng về Pháp</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">chỉ là</td><td id=\"m_nghia_3\">ở 2500 năm trước</td><td id=\"m_nghia_4\">cho</td><td id=\"m_nghia_5\">tầng thứ cực thấp</td><td id=\"m_nghia_6\">về chủng người thường đó</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">Thích Ca Mâu Ni giảng về Pháp, chỉ là ở 2500 năm trước cho tầng thứ cực thấp </font><font color=\"#f97316\">về</font><font color=\"#000000\"> chủng người thường </font><font color=\"#64748b\"><i>(thời)</i></font><font color=\"#000000\"> đó,</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Pháp mà Thích Ca Mâu Ni giảng, cách đây 2 nghìn 5 trăm năm dành cho những người thường ở tầng cực thấp,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"釋迦牟尼講的法","audio":"[(shi4)(jia1)(mou2)(ni2)(jiang3)(de)(fa3)]","pinyin":"shìjiā móuní jiǎng de fǎ","yueyin":"(shi*` chi:a-)(mấu ní)(chi:ảng)(tơ)(fả)","nghia":"Thích Ca Mâu Ni giảng về Pháp"},{"hanzi":"只是","audio":"[(zhi3)(shi4)]","pinyin":"zhǐshì","yueyin":"(trỉ* shi*`)","nghia":"chỉ là"},{"hanzi":"在二千五百年前","audio":"[(zai4)(er4)(qian1)(wu3)(bai3)(nian2)(qian2)]","pinyin":"zài èrqiān wǔbǎi nián qián","yueyin":"(zai`)(ơ` ch'i:en-)(ủ pải)(ni:én)(ch'i:én)","nghia":"ở 2500 năm trước"},{"hanzi":"給","audio":"[(gei3)]","pinyin":"gěi","yueyin":"(cẩy)","nghia":"cho"},{"hanzi":"層次極低","audio":"[(ceng2)(ci4)(ji2)(di1)]","pinyin":"céngcì jí dī","yueyin":"(s'ấng s'ư`)(chí)(ti-)","nghia":"tầng thứ cực thấp"},{"hanzi":"的那種常人","audio":"[(de)(na4)(zhong3)(chang2)(ren2)]","pinyin":"de nà zhǒng chángrén","yueyin":"(tơ)(na`)(trủng)(tr'áng rấn)","nghia":"về chủng người thường đó"}]
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