/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\"></td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(na4)(me)]</td><td id=\"m_audio_3\">[(wei4)(shen2)(me)]</td><td id=\"m_audio_4\">[(jiu4)]</td><td id=\"m_audio_5\">[(ke2)(yi3)]</td><td id=\"m_audio_6\">[(gei3)]</td><td id=\"m_audio_7\">[(xiu1)(lian4)(de)(ren2)]</td><td id=\"m_audio_8\">[(zuo4)]</td><td id=\"m_audio_9\">[(ne)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\"></td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(na` mơ)</td><td id=\"m_yueyin_3\">(guây` shấn mơ)</td><td id=\"m_yueyin_4\">(chi:âu`)</td><td id=\"m_yueyin_5\">(khứa ỷ)</td><td id=\"m_yueyin_6\">(cẩy)</td><td id=\"m_yueyin_7\">(xi:âu- li:en`)(tơ)(rấn)</td><td id=\"m_yueyin_8\">(zua`)</td><td id=\"m_yueyin_9\">(nưa)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"> </td><td id=\"m_hanzi_1\"> </td><td id=\"m_hanzi_2\">那麼</td><td id=\"m_hanzi_3\">為甚麼</td><td id=\"m_hanzi_4\">就</td><td id=\"m_hanzi_5\">可以</td><td id=\"m_hanzi_6\">給</td><td id=\"m_hanzi_7\">修煉的人</td><td id=\"m_hanzi_8\">做</td><td id=\"m_hanzi_9\">呢</td><td id=\"m_hanzi_10\">？</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\"></td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">nàme</td><td id=\"m_pinyin_3\">wèishénme</td><td id=\"m_pinyin_4\">jiù</td><td id=\"m_pinyin_5\">kěyǐ</td><td id=\"m_pinyin_6\">gěi</td><td id=\"m_pinyin_7\">xiūliàn de rén</td><td id=\"m_pinyin_8\">zuò</td><td id=\"m_pinyin_9\">ne</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\"></td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">vậy thì</td><td id=\"m_nghia_3\">tại sao</td><td id=\"m_nghia_4\">lại</td><td id=\"m_nghia_5\">có thể</td><td id=\"m_nghia_6\">giúp</td><td id=\"m_nghia_7\">người tu luyện</td><td id=\"m_nghia_8\">làm</td><td id=\"m_nghia_9\">vậy</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>vậy thì tại sao lại có thể giúp người tu luyện làm vậy?</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Vậy vì sao lại có thể giúp người tu luyện [trị bệnh] được?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"那麼","audio":"[(na4)(me)]","pinyin":"nàme","yueyin":"(na` mơ)","nghia":"vậy thì"},{"hanzi":"為甚麼","audio":"[(wei4)(shen2)(me)]","pinyin":"wèishénme","yueyin":"(guây` shấn mơ)","nghia":"tại sao"},{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"thì, lại"},{"hanzi":"可以","audio":"[(ke2)(yi3)]","pinyin":"kěyǐ","yueyin":"(khứa ỷ)","nghia":"có thể, được phép"},{"hanzi":"給","audio":"[(gei3)]","pinyin":"gěi","yueyin":"(cẩy)","nghia":"cho, giúp (chỉ người được hưởng)"},{"hanzi":"修煉的人","audio":"[(xiu1)(lian4)(de)(ren2)]","pinyin":"xiūliàn de rén","yueyin":"(xi:âu- li:en`)(tơ)(rấn)","nghia":"người tu luyện"},{"hanzi":"做","audio":"[(zuo4)]","pinyin":"zuò","yueyin":"(zua`)","nghia":"làm"},{"hanzi":"呢","audio":"[(ne)]","pinyin":"ne","yueyin":"(nưa)","nghia":"vậy: trợ từ nghi vấn"}]
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