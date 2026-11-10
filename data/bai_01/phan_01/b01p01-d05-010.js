/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d05-010",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d05-010)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dan4)(shi4)]</td><td id=\"m_audio_1\">[(ye3)]</td><td id=\"m_audio_2\">[(bu4)(neng2)(gou4)]</td><td id=\"m_audio_3\">[(wan2)(quan2)]</td><td id=\"m_audio_4\">[(gei3)]</td><td id=\"m_audio_5\">[(ren2)]</td><td id=\"m_audio_6\">[(zhi4)(hao3)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tan` shi*`)</td><td id=\"m_yueyin_1\">(yể)</td><td id=\"m_yueyin_2\">(pu`)(nấng câu`)</td><td id=\"m_yueyin_3\">(goán ch'oán)</td><td id=\"m_yueyin_4\">(cẩy)</td><td id=\"m_yueyin_5\">(rấn)</td><td id=\"m_yueyin_6\">(tri*` hảo)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">但是</td><td id=\"m_hanzi_1\">也</td><td id=\"m_hanzi_2\">不能夠</td><td id=\"m_hanzi_3\">完全</td><td id=\"m_hanzi_4\">給</td><td id=\"m_hanzi_5\">人</td><td id=\"m_hanzi_6\">治好</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dànshì</td><td id=\"m_pinyin_1\">yě</td><td id=\"m_pinyin_2\">bù nénggòu</td><td id=\"m_pinyin_3\">wánquán</td><td id=\"m_pinyin_4\">gěi</td><td id=\"m_pinyin_5\">rén</td><td id=\"m_pinyin_6\">zhìhǎo</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nhưng</td><td id=\"m_nghia_1\">cũng</td><td id=\"m_nghia_2\">không thể</td><td id=\"m_nghia_3\">hoàn toàn</td><td id=\"m_nghia_4\">giúp</td><td id=\"m_nghia_5\">người</td><td id=\"m_nghia_6\">trị khỏi</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>nhưng cũng không thể hoàn toàn giúp người trị khỏi.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">nhưng cũng không thể hoàn toàn trị hết [bệnh] cho người ta được.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"但是","audio":"[(dan4)(shi4)]","pinyin":"dànshì","yueyin":"(tan` shi*`)","nghia":"nhưng"},{"hanzi":"也","audio":"[(ye3)]","pinyin":"yě","yueyin":"(yể)","nghia":"cũng"},{"hanzi":"不能夠","audio":"[(bu4)(neng2)(gou4)]","pinyin":"bù nénggòu","yueyin":"(pu`)(nấng câu`)","nghia":"không thể"},{"hanzi":"完全","audio":"[(wan2)(quan2)]","pinyin":"wánquán","yueyin":"(goán ch'oán)","nghia":"hoàn toàn"},{"hanzi":"給","audio":"[(gei3)]","pinyin":"gěi","yueyin":"(cẩy)","nghia":"cho, giúp (chỉ người được hưởng)"},{"hanzi":"人","audio":"[(ren2)]","pinyin":"rén","yueyin":"(rấn)","nghia":"người"},{"hanzi":"治好","audio":"[(zhi4)(hao3)]","pinyin":"zhìhǎo","yueyin":"(tri*` hảo)","nghia":"trị khỏi, chữa khỏi"}]
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