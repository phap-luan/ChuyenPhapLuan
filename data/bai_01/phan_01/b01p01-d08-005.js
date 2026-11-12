/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d08-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d08-005)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(you3)(de)(ren2)]</td><td id=\"m_audio_1\">[(xiang3)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(wo3)]</td><td id=\"m_audio_4\">[(bing4)(hao3)(le)]</td><td id=\"m_audio_5\"></td><td id=\"m_audio_6\">[(wo3)]</td><td id=\"m_audio_7\">[(jiu4)]</td><td id=\"m_audio_8\">[(xiu1)(lian4)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(yẩu)(tơ)(rấn)</td><td id=\"m_yueyin_1\">(xi:ảng)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(gủa)</td><td id=\"m_yueyin_4\">(ping`)(hảo)(lơ)</td><td id=\"m_yueyin_5\"></td><td id=\"m_yueyin_6\">(gủa)</td><td id=\"m_yueyin_7\">(chi:âu`)</td><td id=\"m_yueyin_8\">(xi:âu- li:en`)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">有的人</td><td id=\"m_hanzi_1\">想</td><td id=\"m_hanzi_2\">：</td><td id=\"m_hanzi_3\">我</td><td id=\"m_hanzi_4\">病好了</td><td id=\"m_hanzi_5\">,</td><td id=\"m_hanzi_6\">我</td><td id=\"m_hanzi_7\">就</td><td id=\"m_hanzi_8\">修煉</td><td id=\"m_hanzi_9\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">yǒu de rén</td><td id=\"m_pinyin_1\">xiǎng</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">wǒ</td><td id=\"m_pinyin_4\">bìng hǎo le</td><td id=\"m_pinyin_5\"></td><td id=\"m_pinyin_6\">wǒ</td><td id=\"m_pinyin_7\">jiù</td><td id=\"m_pinyin_8\">xiūliàn</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">có người</td><td id=\"m_nghia_1\">nghĩ</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">tôi</td><td id=\"m_nghia_4\">bệnh khỏi rồi</td><td id=\"m_nghia_5\"></td><td id=\"m_nghia_6\">tôi</td><td id=\"m_nghia_7\">sẽ</td><td id=\"m_nghia_8\">tu luyện</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p><font color=\"#000000\"><b>có người nghĩ: tôi bệnh khỏi rồi, tôi sẽ tu luyện.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Có người nghĩ: ‘Mình hết bệnh thì mình sẽ tu luyện’.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"有的人","audio":"[(you3)(de)(ren2)]","pinyin":"yǒu de rén","yueyin":"(yẩu)(tơ)(rấn)","nghia":"có người"},{"hanzi":"想","audio":"[(xiang3)]","pinyin":"xiǎng","yueyin":"(xi:ảng)","nghia":"nghĩ"},{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"病好了","audio":"[(bing4)(hao3)(le)]","pinyin":"bìng hǎo le","yueyin":"(ping`)(hảo)(lơ)","nghia":"bệnh khỏi rồi"},{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"sẽ"},{"hanzi":"修煉","audio":"[(xiu1)(lian4)]","pinyin":"xiūliàn","yueyin":"(xi:âu- li:en`)","nghia":"tu luyện"}]
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