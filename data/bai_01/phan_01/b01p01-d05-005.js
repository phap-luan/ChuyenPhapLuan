/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d05-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d05-005)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(yao4)(shi)]</td><td id=\"m_audio_1\">[(zhen1)(zheng4)]</td><td id=\"m_audio_2\">[(neng2)(gou4)]</td><td id=\"m_audio_3\">[(ba3)]</td><td id=\"m_audio_4\">[(zhe4)(ge)(bing4)]</td><td id=\"m_audio_5\">[(zhi4)(hao3)]</td><td id=\"m_audio_6\"></td><td id=\"m_audio_7\">[(che4)(di3)]</td><td id=\"m_audio_8\">[(qing1)(chu2)]</td><td id=\"m_audio_9\">[(zhe4)(xie1)(ye4)(li4)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(yao` shi*)</td><td id=\"m_yueyin_1\">(trân- trâng`)</td><td id=\"m_yueyin_2\">(nấng câu`)</td><td id=\"m_yueyin_3\">(pả)</td><td id=\"m_yueyin_4\">(trưa` cưa)(ping`)</td><td id=\"m_yueyin_5\">(tri*` hảo)</td><td id=\"m_yueyin_6\"></td><td id=\"m_yueyin_7\">(tr'ưa` tỉ)</td><td id=\"m_yueyin_8\">(ch'ing- tr'ú)</td><td id=\"m_yueyin_9\">(trưa` xi:ê-)(yê` li`)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">要是</td><td id=\"m_hanzi_1\">真正</td><td id=\"m_hanzi_2\">能夠</td><td id=\"m_hanzi_3\">把</td><td id=\"m_hanzi_4\">這個病</td><td id=\"m_hanzi_5\">治好</td><td id=\"m_hanzi_6\">,</td><td id=\"m_hanzi_7\">徹底</td><td id=\"m_hanzi_8\">清除</td><td id=\"m_hanzi_9\">這些業力</td><td id=\"m_hanzi_10\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">yàoshi</td><td id=\"m_pinyin_1\">zhēnzhèng</td><td id=\"m_pinyin_2\">nénggòu</td><td id=\"m_pinyin_3\">bǎ</td><td id=\"m_pinyin_4\">zhège bìng</td><td id=\"m_pinyin_5\">zhìhǎo</td><td id=\"m_pinyin_6\"></td><td id=\"m_pinyin_7\">chèdǐ</td><td id=\"m_pinyin_8\">qīngchú</td><td id=\"m_pinyin_9\">zhèxiē yèlì</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nếu</td><td id=\"m_nghia_1\">chân chính</td><td id=\"m_nghia_2\">có thể</td><td id=\"m_nghia_3\">đem</td><td id=\"m_nghia_4\">cái bệnh này</td><td id=\"m_nghia_5\">trị khỏi</td><td id=\"m_nghia_6\"></td><td id=\"m_nghia_7\">triệt để</td><td id=\"m_nghia_8\">thanh trừ</td><td id=\"m_nghia_9\">những nghiệp lực này</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>nếu chân chính có thể đem cái bệnh này trị khỏi, triệt để thanh trừ những nghiệp lực này,&nbsp;</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Nếu thật sự có khả năng trị hết bệnh ấy, thanh trừ triệt để nghiệp lực ấy,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"要是","audio":"[(yao4)(shi)]","pinyin":"yàoshi","yueyin":"(yao` shi*)","nghia":"nếu"},{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"chân chính"},{"hanzi":"能夠","audio":"[(neng2)(gou4)]","pinyin":"nénggòu","yueyin":"(nấng câu`)","nghia":"có thể"},{"hanzi":"把","audio":"[(ba3)]","pinyin":"bǎ","yueyin":"(pả)","nghia":"đem, mang"},{"hanzi":"這個病","audio":"[(zhe4)(ge)(bing4)]","pinyin":"zhège bìng","yueyin":"(trưa` cưa)(ping`)","nghia":"cái bệnh này"},{"hanzi":"治好","audio":"[(zhi4)(hao3)]","pinyin":"zhìhǎo","yueyin":"(tri*` hảo)","nghia":"trị khỏi"},{"hanzi":"徹底","audio":"[(che4)(di3)]","pinyin":"chèdǐ","yueyin":"(tr'ưa` tỉ)","nghia":"triệt để"},{"hanzi":"清除","audio":"[(qing1)(chu2)]","pinyin":"qīngchú","yueyin":"(ch'ing- tr'ú)","nghia":"thanh trừ, dọn sạch"},{"hanzi":"這些業力","audio":"[(zhe4)(xie1)(ye4)(li4)]","pinyin":"zhèxiē yèlì","yueyin":"(trưa` xi:ê-)(yê` li`)","nghia":"những nghiệp lực này"}]
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