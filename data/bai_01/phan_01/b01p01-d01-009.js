/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-009",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-009)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(quan2)(guo2)]</td><td id=\"m_audio_1\">[(de)]</td><td id=\"m_audio_2\">[(qi4)(gong1)]</td><td id=\"m_audio_3\">[(xing2)(shi4)]</td><td id=\"m_audio_4\">[(wo3)]</td><td id=\"m_audio_5\">[(ye3)(dou1)]</td><td id=\"m_audio_6\">[(zhi1)(dao4)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(ch'oán cúa)</td><td id=\"m_yueyin_1\">(tơ)</td><td id=\"m_yueyin_2\">(ch'i` cung-)</td><td id=\"m_yueyin_3\">(xíng shi*`)</td><td id=\"m_yueyin_4\">(gủa)</td><td id=\"m_yueyin_5\">(yể)(tâu-)</td><td id=\"m_yueyin_6\">(tri*- tao`)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">全國</td><td id=\"m_hanzi_1\">的</td><td id=\"m_hanzi_2\">氣功</td><td id=\"m_hanzi_3\">形勢</td><td id=\"m_hanzi_4\">我</td><td id=\"m_hanzi_5\">也都</td><td id=\"m_hanzi_6\">知道</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">quánguó</td><td id=\"m_pinyin_1\">de</td><td id=\"m_pinyin_2\">qìgōng</td><td id=\"m_pinyin_3\">xíngshì</td><td id=\"m_pinyin_4\">wǒ</td><td id=\"m_pinyin_5\">yě dōu</td><td id=\"m_pinyin_6\">zhīdào</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">toàn quốc</td><td id=\"m_nghia_1\">về</td><td id=\"m_nghia_2\">khí công</td><td id=\"m_nghia_3\">tình thế</td><td id=\"m_nghia_4\">tôi</td><td id=\"m_nghia_5\">cũng đều</td><td id=\"m_nghia_6\">biết</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>toàn quốc về khí công tình thế tôi cũng đều biết.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tôi cũng biết rõ tình thế khí công trên toàn quốc</span></p>\n      </div>",
    tableData: [{"hanzi":"全國","audio":"[(quan2)(guo2)]","pinyin":"quánguó","yueyin":"(ch'oán cúa)","nghia":"toàn quốc, cả nước"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ"},{"hanzi":"氣功","audio":"[(qi4)(gong1)]","pinyin":"qìgōng","yueyin":"(ch'i` cung-)","nghia":"khí công"},{"hanzi":"形勢","audio":"[(xing2)(shi4)]","pinyin":"xíngshì","yueyin":"(xíng shi*`)","nghia":"tình hình, tình thế"},{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"也都","audio":"[(ye3)(dou1)]","pinyin":"yě dōu","yueyin":"(yể)(tâu-)","nghia":"cũng đều"},{"hanzi":"知道","audio":"[(zhi1)(dao4)]","pinyin":"zhīdào","yueyin":"(tri*- tao`)","nghia":"biết"}]
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