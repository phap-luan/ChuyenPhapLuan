/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-003)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(yi4)(ting1)(shuo1)]</td><td id=\"m_audio_1\">[(jiang2)(fa3)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(ta1)(jiu4)]</td><td id=\"m_audio_4\">[(bu2)(ai4)(ting1)(le)]</td><td id=\"m_audio_5\"></td><td id=\"m_audio_6\">[(wei4)(shen2)(me)(ne)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(y`)(thing- shua-)</td><td id=\"m_yueyin_1\">(chi:ảng fả)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(tha-)(chi:âu`)</td><td id=\"m_yueyin_4\">(pú)(ai`)(thing-)(lơ)</td><td id=\"m_yueyin_5\"></td><td id=\"m_yueyin_6\">(guây` shấn mơ)(nưa)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">一聽說</td><td id=\"m_hanzi_1\">講法</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">他就</td><td id=\"m_hanzi_4\">不愛聽了</td><td id=\"m_hanzi_5\">。</td><td id=\"m_hanzi_6\">為甚麼呢</td><td id=\"m_hanzi_7\">?</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">yì tīngshuō</td><td id=\"m_pinyin_1\">jiǎngfǎ</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">tā jiù</td><td id=\"m_pinyin_4\">bú ài tīng le</td><td id=\"m_pinyin_5\"></td><td id=\"m_pinyin_6\">wèishénme ne</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">vừa nghe nói</td><td id=\"m_nghia_1\">giảng Pháp</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">họ liền</td><td id=\"m_nghia_4\">không thích nghe nữa</td><td id=\"m_nghia_5\"></td><td id=\"m_nghia_6\">Tại sao vậy</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>vừa nghe nói giảng Pháp, họ liền không thích nghe nữa. Tại sao vậy?</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Hễ nghe đến giảng Pháp, họ liền không thích nghe. Tại sao?</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"一聽說","audio":"[(yi4)(ting1)(shuo1)]","pinyin":"yì tīngshuō","yueyin":"(y`)(thing- shua-)","nghia":"vừa nghe nói"},{"hanzi":"講法","audio":"[(jiang2)(fa3)]","pinyin":"jiǎngfǎ","yueyin":"(chi:ảng fả)","nghia":"giảng Pháp"},{"hanzi":"他就","audio":"[(ta1)(jiu4)]","pinyin":"tā jiù","yueyin":"(tha-)(chi:âu`)","nghia":"họ liền"},{"hanzi":"不愛聽了","audio":"[(bu2)(ai4)(ting1)(le)]","pinyin":"bú ài tīng le","yueyin":"(pú)(ai`)(thing-)(lơ)","nghia":"không thích nghe nữa"},{"hanzi":"為甚麼呢","audio":"[(wei4)(shen2)(me)(ne)]","pinyin":"wèishénme ne","yueyin":"(guây` shấn mơ)(nưa)","nghia":"Tại sao vậy"}]
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