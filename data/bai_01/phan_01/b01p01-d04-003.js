/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d04-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d04-003)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)]</td><td id=\"m_audio_1\">[(yao4)]</td><td id=\"m_audio_2\">[(gei3)]</td><td id=\"m_audio_3\">[(ni3)]</td><td id=\"m_audio_4\">[(jing4)(hua4)]</td><td id=\"m_audio_5\">[(shen1)(ti3)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)</td><td id=\"m_yueyin_1\">(yao`)</td><td id=\"m_yueyin_2\">(cẩy)</td><td id=\"m_yueyin_3\">(nỉ)</td><td id=\"m_yueyin_4\">(ching` hoa`)</td><td id=\"m_yueyin_5\">(shân- thỉ)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我</td><td id=\"m_hanzi_1\">要</td><td id=\"m_hanzi_2\">給</td><td id=\"m_hanzi_3\">你</td><td id=\"m_hanzi_4\">淨化</td><td id=\"m_hanzi_5\">身體</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ</td><td id=\"m_pinyin_1\">yào</td><td id=\"m_pinyin_2\">gěi</td><td id=\"m_pinyin_3\">nǐ</td><td id=\"m_pinyin_4\">jìnghuà</td><td id=\"m_pinyin_5\">shēntǐ</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi</td><td id=\"m_nghia_1\">phải</td><td id=\"m_nghia_2\">giúp</td><td id=\"m_nghia_3\">bạn</td><td id=\"m_nghia_4\">tịnh hóa</td><td id=\"m_nghia_5\">thân thể</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>tôi phải giúp bạn tịnh hóa thân thể.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tôi phải giúp chư vị tịnh hoá thân thể.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"要","audio":"[(yao4)]","pinyin":"yào","yueyin":"(yao`)","nghia":"cần, phải"},{"hanzi":"給","audio":"[(gei3)]","pinyin":"gěi","yueyin":"(cẩy)","nghia":"cho, giúp (giới từ chỉ người hưởng lợi)"},{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"淨化","audio":"[(jing4)(hua4)]","pinyin":"jìnghuà","yueyin":"(ching` hoa`)","nghia":"tịnh hóa"},{"hanzi":"身體","audio":"[(shen1)(ti3)]","pinyin":"shēntǐ","yueyin":"(shân- thỉ)","nghia":"thân thể"}]
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