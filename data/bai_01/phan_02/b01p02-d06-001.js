/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d06-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d06-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(da4)(jia1)(zhi1)(dao4)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(fo2)(jiao4)(zhong1)]</td><td id=\"m_audio_3\">[(you3)(yi4)(ben3)(xiao3)(ce4)(zi)]</td><td id=\"m_audio_4\">[(jiao4)]</td><td id=\"m_audio_5\">[(xi1)(fang1)(ji2)(le4)(shi4)(jie4)(you2)(ji4)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(ta` chi:a-)(tri*- tao`)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(fúa chi:ao`)(trung-)</td><td id=\"m_yueyin_3\">(yẩu)(y`)(pẩn)(xi:ảo s'ưa` zư)</td><td id=\"m_yueyin_4\">(chi:ao`)</td><td id=\"m_yueyin_5\">(xi- fang-)(chí lưa`)(shi*` chi:ê`)(yấu chi`)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">大家知道</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">佛教<font color=\"#3b82f6\">中</font></td><td id=\"m_hanzi_3\">有一本<font color=\"#f97316\">小</font>冊子</td><td id=\"m_hanzi_4\">叫</td><td id=\"m_hanzi_5\">《西方極樂世界遊記》</td><td id=\"m_hanzi_6\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dàjiā zhīdào</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">fójiào zhōng</td><td id=\"m_pinyin_3\">yǒu yì běn xiǎocèzi</td><td id=\"m_pinyin_4\">jiào</td><td id=\"m_pinyin_5\">xīfāng jílè shìjiè yóujì</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">mọi người biết</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\"><font color=\"#3b82f6\">trong</font> Phật giáo</td><td id=\"m_nghia_3\">có một bản sách <font color=\"#f97316\">nhỏ</font></td><td id=\"m_nghia_4\">gọi là</td><td id=\"m_nghia_5\">\"Tây phương Cực Lạc thế giới du ký\"</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">mọi người biết, </font><font color=\"#3b82f6\">trong</font><font color=\"#000000\"> Phật giáo có một bản sách </font><font color=\"#f97316\">nhỏ</font><font color=\"#000000\"> gọi là \"Tây phương Cực Lạc thế giới du ký\",</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Mọi người đều biết, trong Phật giáo có cuốn sách nhỏ tên là «Tây phương Cực Lạc thế giới du ký»,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"大家知道","audio":"[(da4)(jia1)(zhi1)(dao4)]","pinyin":"dàjiā zhīdào","yueyin":"(ta` chi:a-)(tri*- tao`)","nghia":"mọi người biết"},{"hanzi":"佛教中","audio":"[(fo2)(jiao4)(zhong1)]","pinyin":"fójiào zhōng","yueyin":"(fúa chi:ao`)(trung-)","nghia":"trong Phật giáo"},{"hanzi":"有一本小冊子","audio":"[(you3)(yi4)(ben3)(xiao3)(ce4)(zi)]","pinyin":"yǒu yì běn xiǎocèzi","yueyin":"(yẩu)(y`)(pẩn)(xi:ảo s'ưa` zư)","nghia":"có một bản sách nhỏ"},{"hanzi":"叫","audio":"[(jiao4)]","pinyin":"jiào","yueyin":"(chi:ao`)","nghia":"gọi là"},{"hanzi":"《西方極樂世界遊記》","audio":"[(xi1)(fang1)(ji2)(le4)(shi4)(jie4)(you2)(ji4)]","pinyin":"xīfāng jílè shìjiè yóujì","yueyin":"(xi- fang-)(chí lưa`)(shi*` chi:ê`)(yấu chi`)","nghia":"\"Tây phương Cực Lạc thế giới du ký\""}]
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