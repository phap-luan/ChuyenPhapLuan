/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d05-015",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d05-015)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhe4)(shi4)]</td><td id=\"m_audio_1\">[(jue2)(dui4)]</td><td id=\"m_audio_2\">[(bu4)]</td><td id=\"m_audio_3\">[(yun2)(xu3)]</td><td id=\"m_audio_4\">[(de)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trưa`)(shi*`)</td><td id=\"m_yueyin_1\">(chuế tuây`)</td><td id=\"m_yueyin_2\">(pu`)</td><td id=\"m_yueyin_3\">(duýn xủy)</td><td id=\"m_yueyin_4\">(tơ)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">這是</td><td id=\"m_hanzi_1\">絕對</td><td id=\"m_hanzi_2\">不</td><td id=\"m_hanzi_3\">允許</td><td id=\"m_hanzi_4\">的</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhè shì</td><td id=\"m_pinyin_1\">juéduì</td><td id=\"m_pinyin_2\">bù</td><td id=\"m_pinyin_3\">yǔnxǔ</td><td id=\"m_pinyin_4\">de</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đây là</td><td id=\"m_nghia_1\">tuyệt đối</td><td id=\"m_nghia_2\">không</td><td id=\"m_nghia_3\">được phép</td><td id=\"m_nghia_4\">nhấn mạnh</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">đây là tuyệt đối không được phép </b><font color=\"#3b82f6\"><i>nhấn mạnh</i></font><b style=\"color: rgb(0, 0, 0);\">.</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Điều ấy tuyệt đối không được phép.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"這是","audio":"[(zhe4)(shi4)]","pinyin":"zhè shì","yueyin":"(trưa`)(shi*`)","nghia":"đây là, điều này là"},{"hanzi":"絕對","audio":"[(jue2)(dui4)]","pinyin":"juéduì","yueyin":"(chuế tuây`)","nghia":"tuyệt đối"},{"hanzi":"不","audio":"[(bu4)]","pinyin":"bù","yueyin":"(pu`)","nghia":"không"},{"hanzi":"允許","audio":"[(yun2)(xu3)]","pinyin":"yǔnxǔ","yueyin":"(duýn xủy)","nghia":"cho phép, được phép"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"nhấn mạnh: trợ từ cuối trong cấu trúc 是…的"}]
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