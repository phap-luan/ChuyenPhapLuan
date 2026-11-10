/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d05-004",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d05-004)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhen1)(zheng4)]</td><td id=\"m_audio_1\">[(chu2)(qu4)]</td><td id=\"m_audio_2\">[(zhe4)(yi2)(nan4)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(jiu4)]</td><td id=\"m_audio_5\">[(dei3)]</td><td id=\"m_audio_6\">[(xiao1)(chu2)]</td><td id=\"m_audio_7\">[(ye4)(li4)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trân- trâng`)</td><td id=\"m_yueyin_1\">(tr'ú ch'uy`)</td><td id=\"m_yueyin_2\">(trưa`)(ý)(nan`)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(chi:âu`)</td><td id=\"m_yueyin_5\">(tẩy)</td><td id=\"m_yueyin_6\">(xi:ao- tr'ú)</td><td id=\"m_yueyin_7\">(yê` li`)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">真正</td><td id=\"m_hanzi_1\">除去</td><td id=\"m_hanzi_2\">這一難</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">就</td><td id=\"m_hanzi_5\">得</td><td id=\"m_hanzi_6\">消除</td><td id=\"m_hanzi_7\">業力</td><td id=\"m_hanzi_8\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhēnzhèng</td><td id=\"m_pinyin_1\">chúqù</td><td id=\"m_pinyin_2\">zhè yí nàn</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">jiù</td><td id=\"m_pinyin_5\">děi</td><td id=\"m_pinyin_6\">xiāochú</td><td id=\"m_pinyin_7\">yèlì</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chân chính</td><td id=\"m_nghia_1\">trừ bỏ</td><td id=\"m_nghia_2\">nạn này</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">sẽ</td><td id=\"m_nghia_5\">phải</td><td id=\"m_nghia_6\">tiêu trừ</td><td id=\"m_nghia_7\">nghiệp lực</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>chân chính trừ bỏ một nạn này, sẽ phải tiêu trừ nghiệp lực.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">[Để] thật sự trừ dứt nạn ấy, thì phải tiêu trừ nghiệp lực.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"chân chính"},{"hanzi":"除去","audio":"[(chu2)(qu4)]","pinyin":"chúqù","yueyin":"(tr'ú ch'uy`)","nghia":"trừ bỏ, loại bỏ"},{"hanzi":"這一難","audio":"[(zhe4)(yi2)(nan4)]","pinyin":"zhè yí nàn","yueyin":"(trưa`)(ý)(nan`)","nghia":"nạn này"},{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"sẽ, thì"},{"hanzi":"得","audio":"[(dei3)]","pinyin":"děi","yueyin":"(tẩy)","nghia":"phải"},{"hanzi":"消除","audio":"[(xiao1)(chu2)]","pinyin":"xiāochú","yueyin":"(xi:ao- tr'ú)","nghia":"tiêu trừ, xóa bỏ"},{"hanzi":"業力","audio":"[(ye4)(li4)]","pinyin":"yèlì","yueyin":"(yê` li`)","nghia":"nghiệp lực"}]
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