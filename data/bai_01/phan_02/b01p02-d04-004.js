/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d04-004",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d04-004)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)(qi2)(shi2)]</td><td id=\"m_audio_1\">[(jiang3)(le)]</td><td id=\"m_audio_2\">[(yi2)(ge4)(shen2)(me)(wen4)(ti2)]</td><td id=\"m_audio_3\">[(ya)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha-)(ch'í shí*)</td><td id=\"m_yueyin_1\">(chi:ảng)(lơ)</td><td id=\"m_yueyin_2\">(ý)(cưa`)(shấn mơ)(guân` thí)</td><td id=\"m_yueyin_3\">(ya)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他其實</td><td id=\"m_hanzi_1\">講<font color=\"#ec4899\">了</font></td><td id=\"m_hanzi_2\">一個<font color=\"#f97316\">甚麼</font><font color=\"#3b82f6\">問題</font></td><td id=\"m_hanzi_3\">呀</td><td id=\"m_hanzi_4\">?</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tā qíshí</td><td id=\"m_pinyin_1\">jiǎng le</td><td id=\"m_pinyin_2\">yí gè shénme wèntí</td><td id=\"m_pinyin_3\">ya</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">ông kỳ thực</td><td id=\"m_nghia_1\"><font color=\"#ec4899\">đã</font> giảng</td><td id=\"m_nghia_2\">một <font color=\"#3b82f6\">vấn đề</font> <font color=\"#f97316\">gì</font></td><td id=\"m_nghia_3\">vậy</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>ông kỳ thực đã giảng một vấn đề gì vậy?</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Thực ra Ông đã nêu ra một vấn đề gì?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"他其實","audio":"[(ta1)(qi2)(shi2)]","pinyin":"tā qíshí","yueyin":"(tha-)(ch'í shí*)","nghia":"ông kỳ thực"},{"hanzi":"講了","audio":"[(jiang3)(le)]","pinyin":"jiǎng le","yueyin":"(chi:ảng)(lơ)","nghia":"đã giảng"},{"hanzi":"一個甚麼問題","audio":"[(yi2)(ge4)(shen2)(me)(wen4)(ti2)]","pinyin":"yí gè shénme wèntí","yueyin":"(ý)(cưa`)(shấn mơ)(guân` thí)","nghia":"một vấn đề gì"},{"hanzi":"呀","audio":"[(ya)]","pinyin":"ya","yueyin":"(ya)","nghia":"trợ từ nghi vấn, giọng tự vấn"}]
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