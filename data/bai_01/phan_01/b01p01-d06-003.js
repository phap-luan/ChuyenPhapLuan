/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-003)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(suo2)(yi3)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(fa1)(chu1)]</td><td id=\"m_audio_3\">[(de)]</td><td id=\"m_audio_4\">[(zhe4)(yi2)(nian4)]</td><td id=\"m_audio_5\">[(shi4)]</td><td id=\"m_audio_6\">[(zui4)]</td><td id=\"m_audio_7\">[(zhen1)(gui4)]</td><td id=\"m_audio_8\">[(de)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(súa ỷ)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(fa- tr'u-)</td><td id=\"m_yueyin_3\">(tơ)</td><td id=\"m_yueyin_4\">(trưa`)(ý)(ni:en`)</td><td id=\"m_yueyin_5\">(shi*`)</td><td id=\"m_yueyin_6\">(zuây`)</td><td id=\"m_yueyin_7\">(trân-)(cuây`)</td><td id=\"m_yueyin_8\">(tơ)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">所以</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">發出</td><td id=\"m_hanzi_3\">的</td><td id=\"m_hanzi_4\">這一念</td><td id=\"m_hanzi_5\">是</td><td id=\"m_hanzi_6\">最</td><td id=\"m_hanzi_7\">珍貴</td><td id=\"m_hanzi_8\">的</td><td id=\"m_hanzi_9\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">suǒyǐ</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">fāchū</td><td id=\"m_pinyin_3\">de</td><td id=\"m_pinyin_4\">zhè yí niàn</td><td id=\"m_pinyin_5\">shì</td><td id=\"m_pinyin_6\">zuì</td><td id=\"m_pinyin_7\">zhēnguì</td><td id=\"m_pinyin_8\">de</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">cho nên</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">phát xuất</td><td id=\"m_nghia_3\">về</td><td id=\"m_nghia_4\">một niệm này</td><td id=\"m_nghia_5\">là</td><td id=\"m_nghia_6\">nhất</td><td id=\"m_nghia_7\">chân quý</td><td id=\"m_nghia_8\">nhấn mạnh</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span>\n          <span style=\"font-size: 14px; color: #2563eb; cursor: pointer; margin-left: 5px;\"></span>\n        </p>\n        <p style=\"margin-top: 0px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Tạm Dịch:</span><br></p><p><font color=\"#000000\"><b></b></font></p><p><font color=\"#000000\" style=\"font-weight: bold;\">cho nên phát xuất về một niệm này là nhất chân quý </font><font color=\"#3b82f6\" style=\"\"><i style=\"\">nhấn mạnh</i></font><font color=\"#000000\" style=\"font-weight: bold;\">.</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">vậy nên, một niệm [muốn tu luyện] xuất phát ra là trân quý nhất.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"所以","audio":"[(suo2)(yi3)]","pinyin":"suǒyǐ","yueyin":"(súa ỷ)","nghia":"cho nên"},{"hanzi":"發出","audio":"[(fa1)(chu1)]","pinyin":"fāchū","yueyin":"(fa- tr'u-)","nghia":"phát xuất"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ (發出的這一念)"},{"hanzi":"這一念","audio":"[(zhe4)(yi2)(nian4)]","pinyin":"zhè yí niàn","yueyin":"(trưa`)(ý)(ni:en`)","nghia":"một niệm này"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"最","audio":"[(zui4)]","pinyin":"zuì","yueyin":"(zuây`)","nghia":"nhất"},{"hanzi":"珍貴","audio":"[(zhen1)(gui4)]","pinyin":"zhēnguì","yueyin":"(trân-)(cuây`)","nghia":"chân quý, quý giá"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"nhấn mạnh: trợ từ cuối trong cấu trúc 是…的"}]
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