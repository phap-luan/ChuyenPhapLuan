/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-015",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-015)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(she4)(ji2)]</td><td id=\"m_audio_1\">[(de)]</td><td id=\"m_audio_2\">[(wen4)(ti2)]</td><td id=\"m_audio_3\">[(ye3)]</td><td id=\"m_audio_4\">[(hen3)]</td><td id=\"m_audio_5\">[(jian1)(rui4)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shưa` chí)</td><td id=\"m_yueyin_1\">(tơ)</td><td id=\"m_yueyin_2\">(guân` thí)</td><td id=\"m_yueyin_3\">(yể)</td><td id=\"m_yueyin_4\">(hẩn)</td><td id=\"m_yueyin_5\">(chi:en- ruây`)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">涉及</td><td id=\"m_hanzi_1\">的</td><td id=\"m_hanzi_2\">問題</td><td id=\"m_hanzi_3\">也</td><td id=\"m_hanzi_4\">很</td><td id=\"m_hanzi_5\">尖銳</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shèjí</td><td id=\"m_pinyin_1\">de</td><td id=\"m_pinyin_2\">wèntí</td><td id=\"m_pinyin_3\">yě</td><td id=\"m_pinyin_4\">hěn</td><td id=\"m_pinyin_5\">jiānruì</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đề cập</td><td id=\"m_nghia_1\">về</td><td id=\"m_nghia_2\">vấn đề</td><td id=\"m_nghia_3\">cũng</td><td id=\"m_nghia_4\">rất</td><td id=\"m_nghia_5\">gay gắt</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font style=\"\"><font color=\"#000000\" style=\"font-weight: bold;\">đề cập về </font><i style=\"\"><font color=\"#64748b\" style=\"\">(</font></i></font><i style=\"\"><font color=\"#64748b\" style=\"\">nhiều)</font></i><font color=\"#000000\" style=\"font-weight: bold;\"> vấn đề cũng rất gay gắt.</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">những vấn đề liên quan đến cũng hết sức gay gắt.</span></p>\n      </div>",
    tableData: [{"hanzi":"涉及","audio":"[(she4)(ji2)]","pinyin":"shèjí","yueyin":"(shưa` chí)","nghia":"đề cập đến"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ (涉及的問題)"},{"hanzi":"問題","audio":"[(wen4)(ti2)]","pinyin":"wèntí","yueyin":"(guân` thí)","nghia":"vấn đề"},{"hanzi":"也","audio":"[(ye3)]","pinyin":"yě","yueyin":"(yể)","nghia":"cũng"},{"hanzi":"很","audio":"[(hen3)]","pinyin":"hěn","yueyin":"(hẩn)","nghia":"rất"},{"hanzi":"尖銳","audio":"[(jian1)(rui4)]","pinyin":"jiānruì","yueyin":"(chi:en- ruây`)","nghia":"sắc bén, gay gắt, nhạy cảm"}]
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