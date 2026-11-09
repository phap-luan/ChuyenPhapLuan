/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-017",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-017)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhe4)(xie1)]</td><td id=\"m_audio_1\">[(xin1)]</td><td id=\"m_audio_2\">[(dou1)]</td><td id=\"m_audio_3\">[(dei3)]</td><td id=\"m_audio_4\">[(fang4)(xia4)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trưa` xi:ê-)</td><td id=\"m_yueyin_1\">(xin-)</td><td id=\"m_yueyin_2\">(tâu-)</td><td id=\"m_yueyin_3\">(tẩy)</td><td id=\"m_yueyin_4\">(fang` xi:a`)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"><font color=\"#ec4899\">這</font>些</td><td id=\"m_hanzi_1\">心</td><td id=\"m_hanzi_2\">都</td><td id=\"m_hanzi_3\">得</td><td id=\"m_hanzi_4\">放下</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhèxiē</td><td id=\"m_pinyin_1\">xīn</td><td id=\"m_pinyin_2\">dōu</td><td id=\"m_pinyin_3\">děi</td><td id=\"m_pinyin_4\">fàngxià</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">những này</td><td id=\"m_nghia_1\">tâm</td><td id=\"m_nghia_2\">đều</td><td id=\"m_nghia_3\">phải</td><td id=\"m_nghia_4\">buông bỏ</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">những tâm </font><font color=\"#ec4899\">này</font><font color=\"#000000\"> đều phải buông bỏ.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">các tâm ấy đều phải vứt bỏ.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"這些","audio":"[(zhe4)(xie1)]","pinyin":"zhèxiē","yueyin":"(trưa` xi:ê-)","nghia":"những... này"},{"hanzi":"心","audio":"[(xin1)]","pinyin":"xīn","yueyin":"(xin-)","nghia":"tâm (ý niệm, tâm niệm)"},{"hanzi":"都","audio":"[(dou1)]","pinyin":"dōu","yueyin":"(tâu-)","nghia":"đều"},{"hanzi":"得","audio":"[(dei3)]","pinyin":"děi","yueyin":"(tẩy)","nghia":"phải"},{"hanzi":"放下","audio":"[(fang4)(xia4)]","pinyin":"fàngxià","yueyin":"(fang` xi:a`)","nghia":"buông bỏ"}]
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