/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(na4)(me)]</td><td id=\"m_audio_1\">[(zhen1)(zheng4)]</td><td id=\"m_audio_2\">[(xiu1)(lian4)]</td><td id=\"m_audio_3\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(na` mơ)</td><td id=\"m_yueyin_1\">(trân- trâng`)</td><td id=\"m_yueyin_2\">(xi:âu- li:en`)</td><td id=\"m_yueyin_3\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">那麼</td><td id=\"m_hanzi_1\">真正</td><td id=\"m_hanzi_2\">修煉</td><td id=\"m_hanzi_3\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">nàme</td><td id=\"m_pinyin_1\">zhēnzhèng</td><td id=\"m_pinyin_2\">xiūliàn</td><td id=\"m_pinyin_3\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">vậy thì</td><td id=\"m_nghia_1\">chân chính</td><td id=\"m_nghia_2\">tu luyện</td><td id=\"m_nghia_3\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>vậy thì chân chính tu luyện,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Là tu luyện chân chính,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"那麼","audio":"[(na4)(me)]","pinyin":"nàme","yueyin":"(na` mơ)","nghia":"vậy thì"},{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"chân chính"},{"hanzi":"修煉","audio":"[(xiu1)(lian4)]","pinyin":"xiūliàn","yueyin":"(xi:âu- li:en`)","nghia":"tu luyện"}]
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