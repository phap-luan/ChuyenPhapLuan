/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d02-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d02-003)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(hai2)(you3)(xu3)(duo1)]</td><td id=\"m_audio_1\">[(fo2)(jia1)(da4)(fa3)]</td><td id=\"m_audio_2\">[(zai4)(min2)(jian1)]</td><td id=\"m_audio_3\">[(liu2)(chuan2)(zhe)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(li4)(dai4)]</td><td id=\"m_audio_6\">[(dan1)(chuan2)(zhe)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(hái)(yẩu)(xủy tua-)</td><td id=\"m_yueyin_1\">(fúa chi:a-)(ta` fả)</td><td id=\"m_yueyin_2\">(zai`)(mín chi:en-)</td><td id=\"m_yueyin_3\">(li:ấu tr'oán trơ)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(li` tai`)</td><td id=\"m_yueyin_6\">(tan- tr'oán trơ)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">還有許多</td><td id=\"m_hanzi_1\">佛家大法</td><td id=\"m_hanzi_2\">在民間</td><td id=\"m_hanzi_3\">流傳<font color=\"#f97316\">著</font></td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">歷代</td><td id=\"m_hanzi_6\">單傳<font color=\"#f97316\">著</font></td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">hái yǒu xǔduō</td><td id=\"m_pinyin_1\">fójiā dàfǎ</td><td id=\"m_pinyin_2\">zài mínjiān</td><td id=\"m_pinyin_3\">liúchuánzhe</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">lìdài</td><td id=\"m_pinyin_6\">dānchuánzhe</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">còn có rất nhiều</td><td id=\"m_nghia_1\">Phật gia đại pháp</td><td id=\"m_nghia_2\">trong dân gian</td><td id=\"m_nghia_3\"><font color=\"#f97316\">đang</font> lưu truyền</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">lịch đại</td><td id=\"m_nghia_6\"><font color=\"#f97316\">đang</font> đơn truyền.</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:,</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">còn có rất nhiều Phật gia đại pháp trong dân gian</font><font color=\"#f97316\"> đang</font><font color=\"#000000\"> lưu truyền, lịch đại </font><font color=\"#f97316\">đang</font><font color=\"#000000\"> đơn truyền.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Còn có rất nhiều Pháp lớn của Phật gia đang lưu truyền tại dân gian, đơn truyền qua các thời đại.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"還有許多","audio":"[(hai2)(you3)(xu3)(duo1)]","pinyin":"hái yǒu xǔduō","yueyin":"(hái)(yẩu)(xủy tua-)","nghia":"còn có rất nhiều"},{"hanzi":"佛家大法","audio":"[(fo2)(jia1)(da4)(fa3)]","pinyin":"fójiā dàfǎ","yueyin":"(fúa chi:a-)(ta` fả)","nghia":"Phật gia đại pháp"},{"hanzi":"在民間","audio":"[(zai4)(min2)(jian1)]","pinyin":"zài mínjiān","yueyin":"(zai`)(mín chi:en-)","nghia":"trong dân gian"},{"hanzi":"流傳著","audio":"[(liu2)(chuan2)(zhe)]","pinyin":"liúchuánzhe","yueyin":"(li:ấu tr'oán trơ)","nghia":"đang lưu truyền"},{"hanzi":"歷代","audio":"[(li4)(dai4)]","pinyin":"lìdài","yueyin":"(li` tai`)","nghia":"lịch đại, nhiều đời"},{"hanzi":"單傳著","audio":"[(dan1)(chuan2)(zhe)]","pinyin":"dānchuánzhe","yueyin":"(tan- tr'oán trơ)","nghia":"đang đơn truyền (mỗi đời một người)"}]
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