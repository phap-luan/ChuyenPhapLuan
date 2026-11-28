/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d04-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d04-003)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(men)(guo4)(qu4)(shuo1)(de)]</td><td id=\"m_audio_1\">[(de2)]</td><td id=\"m_audio_2\">[(ye3)(shi4)(yi2)(yang4)]</td><td id=\"m_audio_3\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa mân)(cua` ch'uy`)(shua-)(tơ)</td><td id=\"m_yueyin_1\">(tứa)</td><td id=\"m_yueyin_2\">(yể)(shi*`)(ý yang`)</td><td id=\"m_yueyin_3\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我們過去說<font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_1\">德</td><td id=\"m_hanzi_2\">也是一樣</td><td id=\"m_hanzi_3\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒmen guòqù shuō de</td><td id=\"m_pinyin_1\">dé</td><td id=\"m_pinyin_2\">yě shì yíyàng</td><td id=\"m_pinyin_3\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chúng tôi quá khứ nói <font color=\"#3b82f6\">về</font></td><td id=\"m_nghia_1\">đức</td><td id=\"m_nghia_2\">cũng là giống như vậy</td><td id=\"m_nghia_3\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">chúng tôi quá khứ nói </font><font color=\"#3b82f6\">về</font><font color=\"#000000\"> \"đức\" cũng là giống như vậy.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">‘Đức’ mà chúng ta nói đến trong quá khứ cũng tương tự như thế.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我們過去說的","audio":"[(wo3)(men)(guo4)(qu4)(shuo1)(de)]","pinyin":"wǒmen guòqù shuō de","yueyin":"(gủa mân)(cua` ch'uy`)(shua-)(tơ)","nghia":"chúng tôi quá khứ nói về"},{"hanzi":"德","audio":"[(de2)]","pinyin":"dé","yueyin":"(tứa)","nghia":"đức"},{"hanzi":"也是一樣","audio":"[(ye3)(shi4)(yi2)(yang4)]","pinyin":"yě shì yíyàng","yueyin":"(yể)(shi*`)(ý yang`)","nghia":"cũng là giống như vậy"}]
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