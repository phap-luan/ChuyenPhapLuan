/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-025",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-025)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zai4)(ti2)(gao1)(zhi1)(hou4)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(ta1)(fa1)(xian4)]</td><td id=\"m_audio_3\">[(jiang3)(guo4)(de)(fa3)]</td><td id=\"m_audio_4\">[(you4)(bu2)(dui4)(le)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(zai`)(thí cao-)(tri*- hâu`)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(tha-)(fa- xi:en`)</td><td id=\"m_yueyin_3\">(chi:ảng cua`)(tơ)(fả)</td><td id=\"m_yueyin_4\">(yâu`)(pú)(tuây`)(lơ)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">再提高<font color=\"#f97316\">之後</font></td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">他發現</td><td id=\"m_hanzi_3\">講過的法</td><td id=\"m_hanzi_4\">又不對了</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zài tígāo zhīhòu</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">tā fāxiàn</td><td id=\"m_pinyin_3\">jiǎngguò de fǎ</td><td id=\"m_pinyin_4\">yòu bú duì le</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">lại sau khi đề cao</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">ông phát hiện</td><td id=\"m_nghia_3\">đã giảng về Pháp</td><td id=\"m_nghia_4\">lại không đúng nữa</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">lại [</font><font color=\"#f97316\">sau khi</font><font color=\"#000000\"> đề cao], ông phát hiện đã giảng về Pháp lại không đúng nữa.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Lại đề cao lên, Ông phát hiện rằng Pháp mình vừa giảng xong lại cũng không đúng nữa.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"再提高之後","audio":"[(zai4)(ti2)(gao1)(zhi1)(hou4)]","pinyin":"zài tígāo zhīhòu","yueyin":"(zai`)(thí cao-)(tri*- hâu`)","nghia":"lại sau khi đề cao"},{"hanzi":"他發現","audio":"[(ta1)(fa1)(xian4)]","pinyin":"tā fāxiàn","yueyin":"(tha-)(fa- xi:en`)","nghia":"ông phát hiện"},{"hanzi":"講過的法","audio":"[(jiang3)(guo4)(de)(fa3)]","pinyin":"jiǎngguò de fǎ","yueyin":"(chi:ảng cua`)(tơ)(fả)","nghia":"đã giảng về Pháp"},{"hanzi":"又不對了","audio":"[(you4)(bu2)(dui4)(le)]","pinyin":"yòu bú duì le","yueyin":"(yâu`)(pú)(tuây`)(lơ)","nghia":"lại không đúng nữa"}]
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