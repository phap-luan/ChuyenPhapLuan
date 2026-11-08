/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-013",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-013)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(yin1)(wei4)]</td><td id=\"m_audio_1\">[(ta1)]</td><td id=\"m_audio_2\">[(qian1)(che3)]</td><td id=\"m_audio_3\">[(hen3)(da4)]</td><td id=\"m_audio_4\">[(de)]</td><td id=\"m_audio_5\">[(wen4)(ti2)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(yin- guây`)</td><td id=\"m_yueyin_1\">(tha-)</td><td id=\"m_yueyin_2\">(ch'i:en- tr'ửa)</td><td id=\"m_yueyin_3\">(hẩn)(ta`)</td><td id=\"m_yueyin_4\">(tơ)</td><td id=\"m_yueyin_5\">(guân` thí)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">因為</td><td id=\"m_hanzi_1\">它</td><td id=\"m_hanzi_2\">牽扯</td><td id=\"m_hanzi_3\">很大</td><td id=\"m_hanzi_4\">的</td><td id=\"m_hanzi_5\">問題</td><td id=\"m_hanzi_6\">，</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">yīnwèi</td><td id=\"m_pinyin_1\">tā</td><td id=\"m_pinyin_2\">qiānchě</td><td id=\"m_pinyin_3\">hěn dà</td><td id=\"m_pinyin_4\">de</td><td id=\"m_pinyin_5\">wèntí</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">bởi vì</td><td id=\"m_nghia_1\">nó</td><td id=\"m_nghia_2\">liên quan</td><td id=\"m_nghia_3\">rất lớn</td><td id=\"m_nghia_4\">về</td><td id=\"m_nghia_5\">vấn đề</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">bởi vì nó liên quan rất lớn về </font><font color=\"#64748b\" style=\"\"><i style=\"\">(nhiều)</i></font><font color=\"#000000\" style=\"font-weight: bold;\"> vấn đề,</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Là vì nó động chạm đến những vấn đề rất lớn,</span></p>\n      </div>",
    tableData: [{"hanzi":"因為","audio":"[(yin1)(wei4)]","pinyin":"yīnwèi","yueyin":"(yin- guây`)","nghia":"bởi vì"},{"hanzi":"它","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"nó (chỉ việc truyền công lên tầng cao)"},{"hanzi":"牽扯","audio":"[(qian1)(che3)]","pinyin":"qiānchě","yueyin":"(ch'i:en- tr'ửa)","nghia":"liên quan, dính líu, lôi kéo theo"},{"hanzi":"很大","audio":"[(hen3)(da4)]","pinyin":"hěn dà","yueyin":"(hẩn)(ta`)","nghia":"rất lớn"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ (很大的問題)"},{"hanzi":"問題","audio":"[(wen4)(ti2)]","pinyin":"wèntí","yueyin":"(guân` thí)","nghia":"vấn đề"}]
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