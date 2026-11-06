/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-010",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-010.mp3)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zai4)]</td><td id=\"m_audio_1\">[(guo2)(nei4)(wai4)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(zhen1)(zheng4)]</td><td id=\"m_audio_4\">[(wang3)]</td><td id=\"m_audio_5\">[(gao1)(ceng2)(ci4)]</td><td id=\"m_audio_6\">[(shang4)]</td><td id=\"m_audio_7\">[(chuang2)(o1)(ng)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(zai`)</td><td id=\"m_yueyin_1\">(cúa nây` goai`)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(trân- trâng`)</td><td id=\"m_yueyin_4\">(goảng)</td><td id=\"m_yueyin_5\">(cao-)(s'ấng s'ư`)</td><td id=\"m_yueyin_6\">(shang`)</td><td id=\"m_yueyin_7\">(tr'oáng ua- ng)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">在</td><td id=\"m_hanzi_1\">國內外</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">真正</td><td id=\"m_hanzi_4\"><font color=\"#3b82f6\">往</font></td><td id=\"m_hanzi_5\">高層次</td><td id=\"m_hanzi_6\"><font color=\"#3b82f6\">上</font></td><td id=\"m_hanzi_7\">傳功</td><td id=\"m_hanzi_8\">，</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zài</td><td id=\"m_pinyin_1\">guónèiwài</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">zhēnzhèng</td><td id=\"m_pinyin_4\">wǎng</td><td id=\"m_pinyin_5\">gāo céngcì</td><td id=\"m_pinyin_6\">shàng</td><td id=\"m_pinyin_7\">chuángōng</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">ở</td><td id=\"m_nghia_1\">trong ngoài nước</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">chân chính</td><td id=\"m_nghia_4\">hướng</td><td id=\"m_nghia_5\">tầng thứ cao</td><td id=\"m_nghia_6\">lên</td><td id=\"m_nghia_7\">truyền công</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">ở trong ngoài nước,&nbsp; chân chính </font><font color=\"#3b82f6\">hướng</font><font color=\"#000000\"> tầng thứ cao </font><font color=\"#3b82f6\">lên</font><font color=\"#000000\"> truyền công,</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Cả trong ngoài nước hiện nay, về việc truyền công lên cao tầng một cách chân chính,</span></p>\n      </div>",
    tableData: [{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"ở, tại (giới từ chỉ phạm vi)"},{"hanzi":"國內外","audio":"[(guo2)(nei4)(wai4)]","pinyin":"guónèiwài","yueyin":"(cúa nây` goai`)","nghia":"trong và ngoài nước"},{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"thật sự, chân chính"},{"hanzi":"往","audio":"[(wang3)]","pinyin":"wǎng","yueyin":"(goảng)","nghia":"hướng, hướng về, hướng tới"},{"hanzi":"高層次","audio":"[(gao1)(ceng2)(ci4)]","pinyin":"gāo céngcì","yueyin":"(cao-)(s'ấng s'ư`)","nghia":"tầng thứ cao"},{"hanzi":"上","audio":"[(shang4)]","pinyin":"shàng","yueyin":"(shang`)","nghia":"lên (ở đây bổ nghĩa cho 往…上: hướng lên)"},{"hanzi":"傳功","audio":"[(chuang2)(o1)(ng)]","pinyin":"chuángōng","yueyin":"(tr'oáng ua- ng)","nghia":"truyền công"}]
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