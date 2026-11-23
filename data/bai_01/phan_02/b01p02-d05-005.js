/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d05-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d05-005)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhe4)(ge)(jin1)(gang1)(jing1)]</td><td id=\"m_audio_1\">[(zen3)(me)]</td><td id=\"m_audio_2\">[(he2)]</td><td id=\"m_audio_3\">[(chang2)(ren2)(jian1)]</td><td id=\"m_audio_4\">[(na4)(ge)(jin1)(gang1)(jing1)]</td><td id=\"m_audio_5\">[(bu4)(yi2)(yang4)(le)]</td><td id=\"m_audio_6\">[(ne)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trưa` cưa)(chin-)(cang-)(ching-)</td><td id=\"m_yueyin_1\">(zẩn mơ)</td><td id=\"m_yueyin_2\">(hứa)</td><td id=\"m_yueyin_3\">(tr'áng rấn)(chi:en-)</td><td id=\"m_yueyin_4\">(na` cưa)(chin-)(cang-)(ching-)</td><td id=\"m_yueyin_5\">(pu`)(ý yang`)(lơ)</td><td id=\"m_yueyin_6\">(nưa)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"><font color=\"#a855f7\">這個</font>《<font color=\"#f97316\">金剛經</font>》</td><td id=\"m_hanzi_1\">怎麼</td><td id=\"m_hanzi_2\"><font color=\"#3b82f6\">和</font></td><td id=\"m_hanzi_3\">常人間</td><td id=\"m_hanzi_4\"><font color=\"#a855f7\">那個</font>《<font color=\"#f97316\">金剛經</font>》</td><td id=\"m_hanzi_5\">不一樣了</td><td id=\"m_hanzi_6\">呢</td><td id=\"m_hanzi_7\">?</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhège jīn gāng jīng</td><td id=\"m_pinyin_1\">zěnme</td><td id=\"m_pinyin_2\">hé</td><td id=\"m_pinyin_3\">chángrén jiān</td><td id=\"m_pinyin_4\">nàge jīn gāng jīng</td><td id=\"m_pinyin_5\">bù yíyàng le</td><td id=\"m_pinyin_6\">ne</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\"><font color=\"#f97316\">Kim Cang Kinh</font> này</td><td id=\"m_nghia_1\">sao lại</td><td id=\"m_nghia_2\">với</td><td id=\"m_nghia_3\">thường nhân gian</td><td id=\"m_nghia_4\"><font color=\"#f97316\">Kim Cang Kinh</font> kia</td><td id=\"m_nghia_5\">không giống nhau rồi</td><td id=\"m_nghia_6\">vậy</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#f97316\">Kim Cang Kinh</font><font color=\"#000000\"> </font><font color=\"#a855f7\">này</font><font color=\"#000000\"> sao lại </font><font color=\"#3b82f6\">với</font><font color=\"#000000\"> thường nhân gian </font><font color=\"#f97316\">Kim Cang Kinh</font><font color=\"#000000\"> </font><font color=\"#a855f7\">kia</font><font color=\"#000000\"> không giống nhau rồi vậy?</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tại sao kinh «Kim Cương» kia lại khác với kinh «Kim Cương» tại nhân gian?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"這個《金剛經》","audio":"[(zhe4)(ge)(jin1)(gang1)(jing1)]","pinyin":"zhège jīn gāng jīng","yueyin":"(trưa` cưa)(chin-)(cang-)(ching-)","nghia":"Kim Cang Kinh này"},{"hanzi":"怎麼","audio":"[(zen3)(me)]","pinyin":"zěnme","yueyin":"(zẩn mơ)","nghia":"sao lại"},{"hanzi":"和","audio":"[(he2)]","pinyin":"hé","yueyin":"(hứa)","nghia":"với"},{"hanzi":"常人間","audio":"[(chang2)(ren2)(jian1)]","pinyin":"chángrén jiān","yueyin":"(tr'áng rấn)(chi:en-)","nghia":"thường nhân gian"},{"hanzi":"那個《金剛經》","audio":"[(na4)(ge)(jin1)(gang1)(jing1)]","pinyin":"nàge jīn gāng jīng","yueyin":"(na` cưa)(chin-)(cang-)(ching-)","nghia":"Kim Cang Kinh kia"},{"hanzi":"不一樣了","audio":"[(bu4)(yi2)(yang4)(le)]","pinyin":"bù yíyàng le","yueyin":"(pu`)(ý yang`)(lơ)","nghia":"không giống nhau rồi"},{"hanzi":"呢","audio":"[(ne)]","pinyin":"ne","yueyin":"(nưa)","nghia":"trợ từ nghi vấn"}]
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