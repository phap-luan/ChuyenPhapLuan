/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\"></td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(zhe4)(xie1)]</td><td id=\"m_audio_3\">[(shi4)(qing)]</td><td id=\"m_audio_4\">[(wo3)(men)]</td><td id=\"m_audio_5\">[(dou1)]</td><td id=\"m_audio_6\">[(yao4)]</td><td id=\"m_audio_7\">[(gei3)]</td><td id=\"m_audio_8\">[(li3)(shun4)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\"></td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(trưa` xi:ê-)</td><td id=\"m_yueyin_3\">(shi*` ch'ing)</td><td id=\"m_yueyin_4\">(gủa mân)</td><td id=\"m_yueyin_5\">(tâu-)</td><td id=\"m_yueyin_6\">(yao`)</td><td id=\"m_yueyin_7\">(cẩy)</td><td id=\"m_yueyin_8\">(lỉ shuân`)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"> </td><td id=\"m_hanzi_1\"> </td><td id=\"m_hanzi_2\">這些</td><td id=\"m_hanzi_3\">事情</td><td id=\"m_hanzi_4\">我們</td><td id=\"m_hanzi_5\">都</td><td id=\"m_hanzi_6\">要</td><td id=\"m_hanzi_7\">給</td><td id=\"m_hanzi_8\">理順</td><td id=\"m_hanzi_9\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\"></td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">zhèxiē</td><td id=\"m_pinyin_3\">shìqing</td><td id=\"m_pinyin_4\">wǒmen</td><td id=\"m_pinyin_5\">dōu</td><td id=\"m_pinyin_6\">yào</td><td id=\"m_pinyin_7\">gěi</td><td id=\"m_pinyin_8\">lǐshùn</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\"></td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">những này</td><td id=\"m_nghia_3\">sự tình</td><td id=\"m_nghia_4\">chúng tôi</td><td id=\"m_nghia_5\">đều</td><td id=\"m_nghia_6\">cần</td><td id=\"m_nghia_7\">làm cho</td><td id=\"m_nghia_8\">lý thuận</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>những này sự tình chúng tôi đều cần làm cho lý thuận,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Những sự tình ấy chúng tôi đều phải giải quyết,</span></p>\n      </div>",
    tableData: [{"hanzi":"這些","audio":"[(zhe4)(xie1)]","pinyin":"zhèxiē","yueyin":"(trưa` xi:ê-)","nghia":"những... này"},{"hanzi":"事情","audio":"[(shi4)(qing)]","pinyin":"shìqing","yueyin":"(shi*` ch'ing)","nghia":"sự việc, sự tình"},{"hanzi":"我們","audio":"[(wo3)(men)]","pinyin":"wǒmen","yueyin":"(gủa mân)","nghia":"chúng tôi, chúng ta"},{"hanzi":"都","audio":"[(dou1)]","pinyin":"dōu","yueyin":"(tâu-)","nghia":"đều"},{"hanzi":"要","audio":"[(yao4)]","pinyin":"yào","yueyin":"(yao`)","nghia":"phải, cần"},{"hanzi":"給","audio":"[(gei3)]","pinyin":"gěi","yueyin":"(cẩy)","nghia":"(trợ từ nhấn mạnh xử lý) cho, làm cho"},{"hanzi":"理順","audio":"[(li3)(shun4)]","pinyin":"lǐshùn","yueyin":"(lỉ shuân`)","nghia":"lý thuận: sắp xếp, làm rõ, sửa lại"}]
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