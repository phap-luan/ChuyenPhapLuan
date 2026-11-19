/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d02-008",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d02-008)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(suo2)(yi3)]</td><td id=\"m_audio_1\">[(bu2)(xiang4)]</td><td id=\"m_audio_2\">[(wo3)(men)(xian4)(zai4)(zhi1)(dao4)(de)]</td><td id=\"m_audio_3\">[(lian4)(qi4)(de)(dong1)(xi)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(ni3)(xue2)(de)(zai4)(duo1)]</td><td id=\"m_audio_6\">[(ye3)(shi4)(yi2)(yang4)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(sủa ỷ)</td><td id=\"m_yueyin_1\">(pú)(xi:ang`)</td><td id=\"m_yueyin_2\">(gủa mân)(xi:en` zai`)(tri*- tao`)(tơ)</td><td id=\"m_yueyin_3\">(li:en`)(ch'i`)(tơ)(tung- xi)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(nỉ)(xuế)(tơ)(zai`)(tua-)</td><td id=\"m_yueyin_6\">(yể)(shi*`)(ý yang`)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">所以</td><td id=\"m_hanzi_1\">不像</td><td id=\"m_hanzi_2\">我們現在知道的</td><td id=\"m_hanzi_3\"><font color=\"#a855f7\">練氣</font><font color=\"#000000\">的</font><font color=\"#f97316\">東西</font></td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">你學<font color=\"#ec4899\">的</font>再多</td><td id=\"m_hanzi_6\">也是一樣</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">suǒyǐ</td><td id=\"m_pinyin_1\">bú xiàng</td><td id=\"m_pinyin_2\">wǒmen xiànzài zhīdào de</td><td id=\"m_pinyin_3\">liàn qì de dōngxi</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">nǐ xué de zài duō</td><td id=\"m_pinyin_6\">yě shì yíyàng</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">cho nên</td><td id=\"m_nghia_1\">không giống</td><td id=\"m_nghia_2\">chúng ta hiện nay biết về</td><td id=\"m_nghia_3\">những thứ <font color=\"#000000\">của</font> luyện khí</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">bạn học được dù nhiều</td><td id=\"m_nghia_6\">cũng là như nhau</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">cho nên không giống chúng ta hiện nay biết về [</font><font color=\"#f97316\">những thứ</font><font color=\"#000000\"> của </font><font color=\"#a855f7\">luyện khí</font><font color=\"#000000\">], bạn học </font><font color=\"#ec4899\">được</font><font color=\"#000000\"> dù nhiều cũng là như nhau</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">vậy nó khác với những thứ luyện khí chúng ta biết hiện nay; [những thứ mà] chư vị có học nhiều nữa cũng vậy thôi.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"所以","audio":"[(suo2)(yi3)]","pinyin":"suǒyǐ","yueyin":"(sủa ỷ)","nghia":"cho nên"},{"hanzi":"不像","audio":"[(bu2)(xiang4)]","pinyin":"bú xiàng","yueyin":"(pú)(xi:ang`)","nghia":"không giống"},{"hanzi":"我們現在知道的","audio":"[(wo3)(men)(xian4)(zai4)(zhi1)(dao4)(de)]","pinyin":"wǒmen xiànzài zhīdào de","yueyin":"(gủa mân)(xi:en` zai`)(tri*- tao`)(tơ)","nghia":"chúng ta hiện nay biết về"},{"hanzi":"練氣的東西","audio":"[(lian4)(qi4)(de)(dong1)(xi)]","pinyin":"liàn qì de dōngxi","yueyin":"(li:en`)(ch'i`)(tơ)(tung- xi)","nghia":"những thứ của luyện khí"},{"hanzi":"你學的再多","audio":"[(ni3)(xue2)(de)(zai4)(duo1)]","pinyin":"nǐ xué de zài duō","yueyin":"(nỉ)(xuế)(tơ)(zai`)(tua-)","nghia":"bạn học được dù nhiều (的= 得)"},{"hanzi":"也是一樣","audio":"[(ye3)(shi4)(yi2)(yang4)]","pinyin":"yě shì yíyàng","yueyin":"(yể)(shi*`)(ý yang`)","nghia":"cũng là như nhau"}]
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