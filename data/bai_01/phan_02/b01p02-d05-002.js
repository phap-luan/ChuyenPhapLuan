/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d05-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d05-002)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(bu4)(jiao1)(ni3)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(zen3)(me)(zhi2)(dao3)]</td><td id=\"m_audio_3\">[(qu4)(lian4)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(ru2)(he2)(qu4)(lian4)]</td><td id=\"m_audio_6\"></td><td id=\"m_audio_7\">[(ru2)(he2)(qu4)(xiu1)]</td><td id=\"m_audio_8\">[(a)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(pu`)(chi:ao-)(nỉ)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(zẩn mơ)(trỉ* tảo)</td><td id=\"m_yueyin_3\">(ch'uy`)(li:en`)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(rú hứa)(ch'uy`)(li:en`)</td><td id=\"m_yueyin_6\"></td><td id=\"m_yueyin_7\">(rú hứa)(ch'uy`)(xi:âu-)</td><td id=\"m_yueyin_8\">(a)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">不教你</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">怎麼指導</td><td id=\"m_hanzi_3\">去煉</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\"><font color=\"#ec4899\">如何</font>去煉</td><td id=\"m_hanzi_6\">,</td><td id=\"m_hanzi_7\"><font color=\"#ec4899\">如何</font>去修</td><td id=\"m_hanzi_8\"><font color=\"#3b82f6\">啊</font></td><td id=\"m_hanzi_9\">?</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">bù jiāo nǐ</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">zěnme zhǐdǎo</td><td id=\"m_pinyin_3\">qù liàn</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">rúhé qù liàn</td><td id=\"m_pinyin_6\"></td><td id=\"m_pinyin_7\">rúhé qù xiū</td><td id=\"m_pinyin_8\">a</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">không dạy bạn</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">làm sao chỉ đạo</td><td id=\"m_nghia_3\">đi luyện</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">như nào đi luyện</td><td id=\"m_nghia_6\"></td><td id=\"m_nghia_7\">như nào đi tu</td><td id=\"m_nghia_8\">đây</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">không dạy bạn, làm sao chỉ đạo đi luyện, </font><font color=\"#ec4899\">như nào</font><font color=\"#000000\"> đi luyện, </font><font color=\"#ec4899\">như nào</font><font color=\"#000000\"> đi tu </font><font color=\"#3b82f6\">đây</font><font color=\"#000000\">?</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Không dạy chư vị, thử hỏi chỉ đạo [tu] luyện làm sao, luyện thế nào, rồi tu ra sao?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"不教你","audio":"[(bu4)(jiao1)(ni3)]","pinyin":"bù jiāo nǐ","yueyin":"(pu`)(chi:ao-)(nỉ)","nghia":"không dạy bạn"},{"hanzi":"怎麼指導","audio":"[(zen3)(me)(zhi2)(dao3)]","pinyin":"zěnme zhǐdǎo","yueyin":"(zẩn mơ)(trỉ* tảo)","nghia":"làm sao chỉ đạo"},{"hanzi":"去煉","audio":"[(qu4)(lian4)]","pinyin":"qù liàn","yueyin":"(ch'uy`)(li:en`)","nghia":"đi luyện"},{"hanzi":"如何去煉","audio":"[(ru2)(he2)(qu4)(lian4)]","pinyin":"rúhé qù liàn","yueyin":"(rú hứa)(ch'uy`)(li:en`)","nghia":"như nào đi luyện"},{"hanzi":"如何去修","audio":"[(ru2)(he2)(qu4)(xiu1)]","pinyin":"rúhé qù xiū","yueyin":"(rú hứa)(ch'uy`)(xi:âu-)","nghia":"như nào đi tu"},{"hanzi":"啊","audio":"[(a)]","pinyin":"a","yueyin":"(a)","nghia":"trợ từ ngữ khí, câu hỏi tu từ"}]
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