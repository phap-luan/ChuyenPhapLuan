/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d05-014",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d05-014)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zen3)(me)]</td><td id=\"m_audio_1\">[(neng2)]</td><td id=\"m_audio_2\">[(sui2)(yi4)]</td><td id=\"m_audio_3\">[(xiao1)(chu2)]</td><td id=\"m_audio_4\">[(ta1)]</td><td id=\"m_audio_5\">[(de)]</td><td id=\"m_audio_6\">[(ye4)(li4)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(zẩn mơ)</td><td id=\"m_yueyin_1\">(nấng)</td><td id=\"m_yueyin_2\">(suấy y`)</td><td id=\"m_yueyin_3\">(xi:ao- tr'ú)</td><td id=\"m_yueyin_4\">(tha-)</td><td id=\"m_yueyin_5\">(tơ)</td><td id=\"m_yueyin_6\">(yê` li`)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">怎麼</td><td id=\"m_hanzi_1\">能</td><td id=\"m_hanzi_2\">隨意</td><td id=\"m_hanzi_3\">消除</td><td id=\"m_hanzi_4\">他</td><td id=\"m_hanzi_5\"><font color=\"#f97316\">的</font></td><td id=\"m_hanzi_6\">業力</td><td id=\"m_hanzi_7\">？</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zěnme</td><td id=\"m_pinyin_1\">néng</td><td id=\"m_pinyin_2\">suíyì</td><td id=\"m_pinyin_3\">xiāochú</td><td id=\"m_pinyin_4\">tā</td><td id=\"m_pinyin_5\">de</td><td id=\"m_pinyin_6\">yèlì</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">làm sao</td><td id=\"m_nghia_1\">có thể</td><td id=\"m_nghia_2\">tùy ý</td><td id=\"m_nghia_3\">tiêu trừ</td><td id=\"m_nghia_4\">anh ta</td><td id=\"m_nghia_5\">về</td><td id=\"m_nghia_6\">nghiệp lực</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">làm sao có thể tùy ý tiêu trừ anh ta&nbsp;</font><font color=\"#f97316\">về</font><font color=\"#000000\"> nghiệp lực?</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">vậy làm sao có thể tuỳ ý tiêu trừ nghiệp lực cho họ được?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"怎麼","audio":"[(zen3)(me)]","pinyin":"zěnme","yueyin":"(zẩn mơ)","nghia":"làm sao"},{"hanzi":"能","audio":"[(neng2)]","pinyin":"néng","yueyin":"(nấng)","nghia":"có thể"},{"hanzi":"隨意","audio":"[(sui2)(yi4)]","pinyin":"suíyì","yueyin":"(suấy y`)","nghia":"tùy ý"},{"hanzi":"消除","audio":"[(xiao1)(chu2)]","pinyin":"xiāochú","yueyin":"(xi:ao- tr'ú)","nghia":"tiêu trừ"},{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"anh ta"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ sở hữu"},{"hanzi":"業力","audio":"[(ye4)(li4)]","pinyin":"yèlì","yueyin":"(yê` li`)","nghia":"nghiệp lực"}]
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