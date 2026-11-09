/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-012",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-012)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wang3)]</td><td id=\"m_audio_1\">[(gao1)(ceng2)(ci4)]</td><td id=\"m_audio_2\">[(shang4)]</td><td id=\"m_audio_3\">[(chuan2)(gong1)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(wei4)(shen2)(me)]</td><td id=\"m_audio_6\">[(mei2)(you3)]</td><td id=\"m_audio_7\">[(ren2)]</td><td id=\"m_audio_8\">[(zuo4)]</td><td id=\"m_audio_9\">[(ne)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(goảng)</td><td id=\"m_yueyin_1\">(cao-)(s'ấng s'ư`)</td><td id=\"m_yueyin_2\">(shang`)</td><td id=\"m_yueyin_3\">(tr'oán cung-)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(guây` shấn mơ)</td><td id=\"m_yueyin_6\">(mấy yẩu)</td><td id=\"m_yueyin_7\">(rấn)</td><td id=\"m_yueyin_8\">(zua`)</td><td id=\"m_yueyin_9\">(nưa)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"><font color=\"#3b82f6\">往</font></td><td id=\"m_hanzi_1\">高層次</td><td id=\"m_hanzi_2\"><font color=\"#3b82f6\">上</font></td><td id=\"m_hanzi_3\">傳功</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">為甚麼</td><td id=\"m_hanzi_6\">沒有</td><td id=\"m_hanzi_7\">人</td><td id=\"m_hanzi_8\">做</td><td id=\"m_hanzi_9\">呢</td><td id=\"m_hanzi_10\">？</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǎng</td><td id=\"m_pinyin_1\">gāo céngcì</td><td id=\"m_pinyin_2\">shàng</td><td id=\"m_pinyin_3\">chuángōng</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">wèishénme</td><td id=\"m_pinyin_6\">méiyǒu</td><td id=\"m_pinyin_7\">rén</td><td id=\"m_pinyin_8\">zuò</td><td id=\"m_pinyin_9\">ne</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">hướng</td><td id=\"m_nghia_1\">tầng thứ cao</td><td id=\"m_nghia_2\">lên</td><td id=\"m_nghia_3\">truyền công</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">vì sao</td><td id=\"m_nghia_6\">không có</td><td id=\"m_nghia_7\">người</td><td id=\"m_nghia_8\">làm</td><td id=\"m_nghia_9\">vậy</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#3b82f6\">hướng</font><font color=\"#000000\"> tầng thứ cao </font><font color=\"#3b82f6\">lên</font><font color=\"#000000\"> truyền công&nbsp; vì sao không có người làm vậy?</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Truyền công lên cao tầng ấy, tại sao không có ai làm?</span></p>\n      </div>",
    tableData: [{"hanzi":"往","audio":"[(wang3)]","pinyin":"wǎng","yueyin":"(goảng)","nghia":"hướng, hướng về"},{"hanzi":"高層次","audio":"[(gao1)(ceng2)(ci4)]","pinyin":"gāo céngcì","yueyin":"(cao-)(s'ấng s'ư`)","nghia":"tầng thứ cao"},{"hanzi":"上","audio":"[(shang4)]","pinyin":"shàng","yueyin":"(shang`)","nghia":"lên (ở đây bổ nghĩa cho 往…上: hướng lên)"},{"hanzi":"傳功","audio":"[(chuan2)(gong1)]","pinyin":"chuángōng","yueyin":"(tr'oán)(cung-)","nghia":"truyền công"},{"hanzi":"為甚麼","audio":"[(wei4)(shen2)(me)]","pinyin":"wèishénme","yueyin":"(guây` shấn mơ)","nghia":"vì sao (甚麼 = 什麼)"},{"hanzi":"沒有","audio":"[(mei2)(you3)]","pinyin":"méiyǒu","yueyin":"(mấy yẩu)","nghia":"không có"},{"hanzi":"人","audio":"[(ren2)]","pinyin":"rén","yueyin":"(rấn)","nghia":"người"},{"hanzi":"做","audio":"[(zuo4)]","pinyin":"zuò","yueyin":"(zua`)","nghia":"làm"},{"hanzi":"呢","audio":"[(ne)]","pinyin":"ne","yueyin":"(nưa)","nghia":"trợ từ nghi vấn (làm câu hỏi mềm, mang tính tự vấn)"}]
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