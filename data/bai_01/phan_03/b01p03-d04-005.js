/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d04-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d04-005)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(xian4)(zai4)]</td><td id=\"m_audio_1\">[(you3)(ren2)(xue2)(lei2)(feng1)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(ke3)(neng2)]</td><td id=\"m_audio_4\">[(jiu4)(dei3)(shuo1)]</td><td id=\"m_audio_5\">[(ta1)(shi4)(jing1)(shen2)(bing4)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(xi:en` zai`)</td><td id=\"m_yueyin_1\">(yẩu)(rấn)(xuế)(lấy)(fâng-)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(khửa)(nấng)</td><td id=\"m_yueyin_4\">(chi:âu`)(tẩy)(shua-)</td><td id=\"m_yueyin_5\">(tha-)(shi*`)(ching- shấn ping`)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">現在</td><td id=\"m_hanzi_1\">有人學雷鋒</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">可能</td><td id=\"m_hanzi_4\">就得說</td><td id=\"m_hanzi_5\">他是精神病</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">xiànzài</td><td id=\"m_pinyin_1\">yǒu rén xué léi fēng</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">kěnéng</td><td id=\"m_pinyin_4\">jiù děi shuō</td><td id=\"m_pinyin_5\">tā shì jīngshénbìng</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">hiện tại</td><td id=\"m_nghia_1\">có người học Lôi Phong</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">có thể</td><td id=\"m_nghia_4\">sẽ phải nói</td><td id=\"m_nghia_5\">anh ta là tinh thần bệnh</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>hiện tại có người học Lôi Phong, có thể sẽ phải nói anh ta là tinh thần bệnh.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Hiện nay [nếu] có người noi gương Lôi Phong, thì có thể bị coi là mắc bệnh tâm thần.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"現在","audio":"[(xian4)(zai4)]","pinyin":"xiànzài","yueyin":"(xi:en` zai`)","nghia":"hiện tại"},{"hanzi":"有人學雷鋒","audio":"[(you3)(ren2)(xue2)(lei2)(feng1)]","pinyin":"yǒu rén xué léi fēng","yueyin":"(yẩu)(rấn)(xuế)(lấy)(fâng-)","nghia":"có người học Lôi Phong"},{"hanzi":"可能","audio":"[(ke3)(neng2)]","pinyin":"kěnéng","yueyin":"(khửa)(nấng)","nghia":"có thể"},{"hanzi":"就得說","audio":"[(jiu4)(dei3)(shuo1)]","pinyin":"jiù děi shuō","yueyin":"(chi:âu`)(tẩy)(shua-)","nghia":"sẽ phải nói"},{"hanzi":"他是精神病","audio":"[(ta1)(shi4)(jing1)(shen2)(bing4)]","pinyin":"tā shì jīngshénbìng","yueyin":"(tha-)(shi*`)(ching- shấn ping`)","nghia":"anh ta là tinh thần bệnh (bệnh tâm thần)"}]
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