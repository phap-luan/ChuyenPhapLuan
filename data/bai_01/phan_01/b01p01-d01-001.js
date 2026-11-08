/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-001)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)]</td><td id=\"m_audio_1\">[(zai4)(zhong1)]</td><td id=\"m_audio_2\">[(zheng3)(ge4)]</td><td id=\"m_audio_3\">[(chuan2)(fa3)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(chuan2)(gong1)]</td><td id=\"m_audio_6\">[(guo4)(cheng2)]</td><td id=\"m_audio_7\"></td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)</td><td id=\"m_yueyin_1\">(zai`)(trung-)</td><td id=\"m_yueyin_2\">(trẩng cưa`)</td><td id=\"m_yueyin_3\">(tr'oán)(fả)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(tr'oán)(cung-)</td><td id=\"m_yueyin_6\">(cua` tr'ấng)</td><td id=\"m_yueyin_7\"></td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我</td><td id=\"m_hanzi_1\"><font color=\"#3b82f6\">在</font></td><td id=\"m_hanzi_2\">整個</td><td id=\"m_hanzi_3\">傳法</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">傳功</td><td id=\"m_hanzi_6\"><font color=\"#f97316\">過程</font></td><td id=\"m_hanzi_7\"><font color=\"#3b82f6\">中</font></td><td id=\"m_hanzi_8\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ</td><td id=\"m_pinyin_1\">zài…</td><td id=\"m_pinyin_2\">zhěnggè</td><td id=\"m_pinyin_3\">chuán fǎ</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">chuán gōng</td><td id=\"m_pinyin_6\">guòchéng</td><td id=\"m_pinyin_7\">zhōng</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi</td><td id=\"m_nghia_1\">ở</td><td id=\"m_nghia_2\">toàn bộ</td><td id=\"m_nghia_3\">truyền pháp</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">truyền công</td><td id=\"m_nghia_6\">quá trình</td><td id=\"m_nghia_7\">trong</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">tôi </font><font color=\"#3b82f6\">ở</font><font color=\"#000000\"> toàn bộ truyền pháp, truyền công </font><font color=\"#f97316\">quá trình</font><font color=\"#000000\"> </font><font color=\"#3b82f6\">trong</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Trong toàn bộ quá trình truyền Pháp, truyền công</span></p>\n      </div>",
    tableData: [{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"在…中","audio":"[(zai4)(zhong1)]","pinyin":"zài…zhōng","yueyin":"(zai`)(trung-)","nghia":"ở...trong"},{"hanzi":"整個","audio":"[(zheng3)(ge4)]","pinyin":"zhěnggè","yueyin":"(trẩng cưa`)","nghia":"toàn bộ, cả"},{"hanzi":"傳法","audio":"[(chuan2)(fa3)]","pinyin":"chuán fǎ","yueyin":"(tr'oán)(fả)","nghia":"truyền pháp"},{"hanzi":"傳功","audio":"[(chuan2)(gong1)]","pinyin":"chuán gōng","yueyin":"(tr'oán)(cung-)","nghia":"truyền công"},{"hanzi":"過程","audio":"[(guo4)(cheng2)]","pinyin":"guòchéng","yueyin":"(cua` tr'ấng)","nghia":"quá trình"}]
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