/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d04-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d04-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ke3)(shi4)]</td><td id=\"m_audio_1\">[(zai4)(wu3)(liu4)(shi2)(nian2)(dai4)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(you3)(shei2)(hui4)(shuo1)]</td><td id=\"m_audio_4\">[(ta1)(shi4)(jing1)(shen2)(bing4)]</td><td id=\"m_audio_5\">[(ne)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(khửa shi*`)</td><td id=\"m_yueyin_1\">(zai`)(ủ)(li:âu` shí*)(ni:én tai`)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(yẩu)(shấy)(huây`)(shua-)</td><td id=\"m_yueyin_4\">(tha-)(shi*`)(ching- shấn ping`)</td><td id=\"m_yueyin_5\">(nưa)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">可是</td><td id=\"m_hanzi_1\">在五、六十年代</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">有誰會說</td><td id=\"m_hanzi_4\">他是精神病</td><td id=\"m_hanzi_5\">呢</td><td id=\"m_hanzi_6\">?</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">kěshì</td><td id=\"m_pinyin_1\">zài wǔ liùshí niándài</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">yǒu shéi huì shuō</td><td id=\"m_pinyin_4\">tā shì jīngshénbìng</td><td id=\"m_pinyin_5\">ne</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nhưng</td><td id=\"m_nghia_1\">ở 5,60 niên đại</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">có ai sẽ nói</td><td id=\"m_nghia_4\">anh ta là tinh thần bệnh</td><td id=\"m_nghia_5\">chứ</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>nhưng ở 5,60 niên đại, có ai sẽ nói anh ta là tinh thần bệnh chứ?</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Nhưng nếu vào hồi thập kỷ 50, 60, thì ai dám nói người ấy bị bệnh tâm thần?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"可是","audio":"[(ke3)(shi4)]","pinyin":"kěshì","yueyin":"(khửa shi*`)","nghia":"nhưng"},{"hanzi":"在五、六十年代","audio":"[(zai4)(wu3)(liu4)(shi2)(nian2)(dai4)]","pinyin":"zài wǔ liùshí niándài","yueyin":"(zai`)(ủ)(li:âu` shí*)(ni:én tai`)","nghia":"ở 5,60 niên đại (ở những năm 50,60)"},{"hanzi":"有誰會說","audio":"[(you3)(shei2)(hui4)(shuo1)]","pinyin":"yǒu shéi huì shuō","yueyin":"(yẩu)(shấy)(huây`)(shua-)","nghia":"có ai sẽ nói"},{"hanzi":"他是精神病","audio":"[(ta1)(shi4)(jing1)(shen2)(bing4)]","pinyin":"tā shì jīngshénbìng","yueyin":"(tha-)(shi*`)(ching- shấn ping`)","nghia":"anh ta là tinh thần bệnh"},{"hanzi":"呢","audio":"[(ne)]","pinyin":"ne","yueyin":"(nưa)","nghia":"trợ từ nghi vấn, câu hỏi tu từ"}]
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