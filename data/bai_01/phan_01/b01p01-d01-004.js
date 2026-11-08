/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-004",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-004)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dui4)]</td><td id=\"m_audio_1\">[(zheng3)(ge4)]</td><td id=\"m_audio_2\">[(she4)(hui4)]</td><td id=\"m_audio_3\">[(de)]</td><td id=\"m_audio_4\">[(ying2)(xiang3)]</td><td id=\"m_audio_5\">[(ye3)(shi4)]</td><td id=\"m_audio_6\">[(bi3)(jiao4)]</td><td id=\"m_audio_7\">[(hao3)(de)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tuây`)</td><td id=\"m_yueyin_1\">(trẩng cưa`)</td><td id=\"m_yueyin_2\">(shưa` huây`)</td><td id=\"m_yueyin_3\">(tơ)</td><td id=\"m_yueyin_4\">(yíng xi:ảng)</td><td id=\"m_yueyin_5\">(yể)(shi*`)</td><td id=\"m_yueyin_6\">(pỉ chi:ao`)</td><td id=\"m_yueyin_7\">(hảo)(tơ)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">對</td><td id=\"m_hanzi_1\">整個</td><td id=\"m_hanzi_2\">社會</td><td id=\"m_hanzi_3\">的</td><td id=\"m_hanzi_4\">影響</td><td id=\"m_hanzi_5\">也是</td><td id=\"m_hanzi_6\">比較</td><td id=\"m_hanzi_7\">好的</td><td id=\"m_hanzi_8\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">duì</td><td id=\"m_pinyin_1\">zhěnggè</td><td id=\"m_pinyin_2\">shèhuì</td><td id=\"m_pinyin_3\">de</td><td id=\"m_pinyin_4\">yǐngxiǎng</td><td id=\"m_pinyin_5\">yě shì</td><td id=\"m_pinyin_6\">bǐjiào</td><td id=\"m_pinyin_7\">hǎo de</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đối với</td><td id=\"m_nghia_1\">toàn bộ</td><td id=\"m_nghia_2\">xã hội</td><td id=\"m_nghia_3\">về</td><td id=\"m_nghia_4\">ảnh hưởng</td><td id=\"m_nghia_5\">cũng là</td><td id=\"m_nghia_6\">tương đối</td><td id=\"m_nghia_7\">tốt</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>đối với toàn bộ xã hội về ảnh hưởng cũng là tương đối tốt.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">ảnh hưởng đến toàn xã hội cũng rất tốt.</span></p>\n      </div>",
    tableData: [{"hanzi":"對","audio":"[(dui4)]","pinyin":"duì","yueyin":"(tuây`)","nghia":"đối với"},{"hanzi":"整個","audio":"[(zheng3)(ge4)]","pinyin":"zhěnggè","yueyin":"(trẩng cưa`)","nghia":"toàn bộ, cả"},{"hanzi":"社會","audio":"[(she4)(hui4)]","pinyin":"shèhuì","yueyin":"(shưa` huây`)","nghia":"xã hội"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ"},{"hanzi":"影響","audio":"[(ying2)(xiang3)]","pinyin":"yǐngxiǎng","yueyin":"(yíng xi:ảng)","nghia":"ảnh hưởng"},{"hanzi":"也是","audio":"[(ye3)(shi4)]","pinyin":"yě shì","yueyin":"(yể)(shi*`)","nghia":"cũng là"},{"hanzi":"比較","audio":"[(bi3)(jiao4)]","pinyin":"bǐjiào","yueyin":"(pỉ chi:ao`)","nghia":"tương đối, khá"},{"hanzi":"好的","audio":"[(hao3)(de)]","pinyin":"hǎo de","yueyin":"(hảo)(tơ)","nghia":"tốt (的 nhấn mạnh)"}]
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