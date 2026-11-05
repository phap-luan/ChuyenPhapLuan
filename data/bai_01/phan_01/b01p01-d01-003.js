/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-003.mp3)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(shou1)(dao4)]</td><td id=\"m_audio_1\">[(de)]</td><td id=\"m_audio_2\">[(xiao4)(guo3)]</td><td id=\"m_audio_3\">[(shi4)(hao3)(de)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shâu- tao`)</td><td id=\"m_yueyin_1\">(tơ)</td><td id=\"m_yueyin_2\">(xi:ao` của)</td><td id=\"m_yueyin_3\">(shi*`)(hảo)(tơ)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">收到</td><td id=\"m_hanzi_1\">的</td><td id=\"m_hanzi_2\">效果</td><td id=\"m_hanzi_3\">是好<font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_4\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shōudào</td><td id=\"m_pinyin_1\">de</td><td id=\"m_pinyin_2\">xiàoguǒ</td><td id=\"m_pinyin_3\">shì hǎo de</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">thu được</td><td id=\"m_nghia_1\">Đích</td><td id=\"m_nghia_2\">hiệu quả</td><td id=\"m_nghia_3\">là tốt</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">thu được về hiệu quả là tốt </b><i style=\"\"><font color=\"#3b82f6\">(nhấn mạnh)</font></i><b style=\"color: rgb(0, 0, 0);\">,</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">hiệu quả thu được thật tốt,</span></p>\n      </div>",
    tableData: [{"hanzi":"收到","audio":"[(shou1)(dao4)]","pinyin":"shōudào","yueyin":"(shâu- tao`)","nghia":"thu được"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"Đích: Trợ từ kết nối định ngữ"},{"hanzi":"效果","audio":"[(xiao4)(guo3)]","pinyin":"xiàoguǒ","yueyin":"(xi:ao` của)","nghia":"hiệu quả"},{"hanzi":"是好的","audio":"[(shi4)(hao3)(de)]","pinyin":"shì hǎo de","yueyin":"(shi*`)(hảo)(tơ)","nghia":"là tốt (的 nhấn mạnh)"}]
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