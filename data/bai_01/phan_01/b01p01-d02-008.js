/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-008",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-008)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(huo4)(zhe3)(shi4)]</td><td id=\"m_audio_1\">[(bao4)(zhe)]</td><td id=\"m_audio_2\">[(shen2)(me)]</td><td id=\"m_audio_3\">[(bu4)(hao3)]</td><td id=\"m_audio_4\">[(de)]</td><td id=\"m_audio_5\">[(mu4)(di4)]</td><td id=\"m_audio_6\"></td><td id=\"m_audio_7\">[(zhe4)]</td><td id=\"m_audio_8\">[(dou1)]</td><td id=\"m_audio_9\">[(bu4)(xing2)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(hua` trửa)(shi*`)</td><td id=\"m_yueyin_1\">(pao` trơ)</td><td id=\"m_yueyin_2\">(shấn mơ)</td><td id=\"m_yueyin_3\">(pu`)(hảo)</td><td id=\"m_yueyin_4\">(tơ)</td><td id=\"m_yueyin_5\">(mu` ti`)</td><td id=\"m_yueyin_6\"></td><td id=\"m_yueyin_7\">(trưa`)</td><td id=\"m_yueyin_8\">(tâu-)</td><td id=\"m_yueyin_9\">(pu`)(xíng)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">或者是</td><td id=\"m_hanzi_1\">抱著</td><td id=\"m_hanzi_2\">甚麼</td><td id=\"m_hanzi_3\">不好</td><td id=\"m_hanzi_4\">的</td><td id=\"m_hanzi_5\">目地</td><td id=\"m_hanzi_6\">,</td><td id=\"m_hanzi_7\">這</td><td id=\"m_hanzi_8\">都</td><td id=\"m_hanzi_9\">不行</td><td id=\"m_hanzi_10\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">huòzhě shì</td><td id=\"m_pinyin_1\">bàozhe</td><td id=\"m_pinyin_2\">shénme</td><td id=\"m_pinyin_3\">bù hǎo</td><td id=\"m_pinyin_4\">de</td><td id=\"m_pinyin_5\">mùdì</td><td id=\"m_pinyin_6\"></td><td id=\"m_pinyin_7\">zhè</td><td id=\"m_pinyin_8\">dōu</td><td id=\"m_pinyin_9\">bù xíng</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">hoặc giả là</td><td id=\"m_nghia_1\">ôm</td><td id=\"m_nghia_2\">cái gì đó</td><td id=\"m_nghia_3\">không tốt</td><td id=\"m_nghia_4\">về</td><td id=\"m_nghia_5\">mục đích</td><td id=\"m_nghia_6\"></td><td id=\"m_nghia_7\">như thế</td><td id=\"m_nghia_8\">đều</td><td id=\"m_nghia_9\">không được</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>hoặc giả là ôm cái gì đó không tốt về mục đích, như thế đều không được.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">hoặc giả ôm giữ mục đích bất hảo nào đó; như thế đều không được.</span></p>\n      </div>",
    tableData: [{"hanzi":"或者是","audio":"[(huo4)(zhe3)(shi4)]","pinyin":"huòzhě shì","yueyin":"(hua` trửa)(shi*`)","nghia":"hoặc giả (sử) là"},{"hanzi":"抱著","audio":"[(bao4)(zhe)]","pinyin":"bàozhe","yueyin":"(pao` trơ)","nghia":"ôm, mang (著:nhấn mạnh)"},{"hanzi":"甚麼","audio":"[(shen2)(me)]","pinyin":"shénme","yueyin":"(shấn mơ)","nghia":"nào đó, cái gì (= 什麼; ở đây mang nghĩa phiếm chỉ \"bất kỳ\")"},{"hanzi":"不好","audio":"[(bu4)(hao3)]","pinyin":"bù hǎo","yueyin":"(pu`)(hảo)","nghia":"không tốt"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"目地","audio":"[(mu4)(di4)]","pinyin":"mùdì","yueyin":"(mu` ti`)","nghia":"mục đích (= 目的)"},{"hanzi":"這","audio":"[(zhe4)]","pinyin":"zhè","yueyin":"(trưa`)","nghia":"thế, như thế (tóm các vế trên)"},{"hanzi":"都","audio":"[(dou1)]","pinyin":"dōu","yueyin":"(tâu-)","nghia":"đều"},{"hanzi":"不行","audio":"[(bu4)(xing2)]","pinyin":"bù xíng","yueyin":"(pu`)(xíng)","nghia":"không được"}]
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