/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-004",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-004)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dan4)]</td><td id=\"m_audio_1\">[(bi4)(xu1)]</td><td id=\"m_audio_2\">[(shi4)]</td><td id=\"m_audio_3\">[(zhen1)(zheng4)]</td><td id=\"m_audio_4\">[(lai2)]</td><td id=\"m_audio_5\">[(xue2)]</td><td id=\"m_audio_6\">[(da4)(fa3)]</td><td id=\"m_audio_7\">[(de)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tan`)</td><td id=\"m_yueyin_1\">(pi` xuy-)</td><td id=\"m_yueyin_2\">(shi*`)</td><td id=\"m_yueyin_3\">(trân- trâng`)</td><td id=\"m_yueyin_4\">(lái)</td><td id=\"m_yueyin_5\">(xuế)</td><td id=\"m_yueyin_6\">(ta` fả)</td><td id=\"m_yueyin_7\">(tơ)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">但</td><td id=\"m_hanzi_1\">必須</td><td id=\"m_hanzi_2\">是</td><td id=\"m_hanzi_3\">真正</td><td id=\"m_hanzi_4\">來</td><td id=\"m_hanzi_5\">學</td><td id=\"m_hanzi_6\">大法</td><td id=\"m_hanzi_7\"><font color=\"#06b6d4\">的</font></td><td id=\"m_hanzi_8\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dàn</td><td id=\"m_pinyin_1\">bìxū</td><td id=\"m_pinyin_2\">shì</td><td id=\"m_pinyin_3\">zhēnzhèng</td><td id=\"m_pinyin_4\">lái</td><td id=\"m_pinyin_5\">xué</td><td id=\"m_pinyin_6\">dàfǎ</td><td id=\"m_pinyin_7\">de</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nhưng</td><td id=\"m_nghia_1\">nhất định phải</td><td id=\"m_nghia_2\">là</td><td id=\"m_nghia_3\">chân chính</td><td id=\"m_nghia_4\">đến</td><td id=\"m_nghia_5\">học</td><td id=\"m_nghia_6\">Đại Pháp</td><td id=\"m_nghia_7\">nhấn mạnh</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">nhưng nhất định phải là chân chính đến học Đại Pháp </b><i style=\"\"><font color=\"#06b6d4\">nhấn mạnh</font></i><b style=\"color: rgb(0, 0, 0);\">.</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">nhưng [chư vị] phải đến học Đại Pháp một cách chân chính.</span></p>\n      </div>",
    tableData: [{"hanzi":"但","audio":"[(dan4)]","pinyin":"dàn","yueyin":"(tan`)","nghia":"nhưng"},{"hanzi":"必須","audio":"[(bi4)(xu1)]","pinyin":"bìxū","yueyin":"(pi` xuy-)","nghia":"nhất định phải, bắt buộc"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"chân chính"},{"hanzi":"來","audio":"[(lai2)]","pinyin":"lái","yueyin":"(lái)","nghia":"đến (để làm gì)"},{"hanzi":"學","audio":"[(xue2)]","pinyin":"xué","yueyin":"(xuế)","nghia":"học"},{"hanzi":"大法","audio":"[(da4)(fa3)]","pinyin":"dàfǎ","yueyin":"(ta` fả)","nghia":"Đại Pháp (tên gọi pháp môn)"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"nhấn mạnh: trợ từ cuối trong cấu trúc 是…的"}]
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