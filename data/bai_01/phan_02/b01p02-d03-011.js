/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-011",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-011)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dao4)(liu4)(zu3)(hui4)(neng2)(zhe4)(er2)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(jiu4)(dao4)(ding3)(le)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(zai4)(ye3)]</td><td id=\"m_audio_5\">[(zuan1)(bu4)(jin4)(qu4)(le)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tao`)(li:âu` zủ)(huây` nấng)(trưa`)(ớ)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(chi:âu`)(tao`)(tỉng)(lơ)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(zai`)(yể)</td><td id=\"m_yueyin_5\">(zoan-)(pu`)(chin` ch'uy`)(lơ)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">到六祖慧能這兒</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">就到頂了</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">再也</td><td id=\"m_hanzi_5\">鑽不進去了</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dào Liùzǔ Huìnéng zhè ér</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">jiù dào dǐng le</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">zài yě</td><td id=\"m_pinyin_5\">zuān bù jìnqù le</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đến Lục tổ Huệ Năng nơi này</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">thì đến đỉnh rồi</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">lại nữa cũng</td><td id=\"m_nghia_5\">khoan không tiến được rồi</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>đến Lục tổ Huệ Năng nơi này, thì đến đỉnh rồi, lại nữa cũng khoan không tiến được rồi.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">tới lục tổ Huệ Năng thì đã đến đỉnh [sừng bò] và có dùi cũng chẳng đi đến đâu được nữa.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"到六祖慧能這兒","audio":"[(dao4)(liu4)(zu3)(hui4)(neng2)(zhe4)(er2)]","pinyin":"dào Liùzǔ Huìnéng zhè ér","yueyin":"(tao`)(li:âu` zủ)(huây` nấng)(trưa`)(ớ)","nghia":"đến Lục tổ Huệ Năng nơi này (這兒 = 這裡)"},{"hanzi":"就到頂了","audio":"[(jiu4)(dao4)(ding3)(le)]","pinyin":"jiù dào dǐng le","yueyin":"(chi:âu`)(tao`)(tỉng)(lơ)","nghia":"thì đến đỉnh rồi"},{"hanzi":"再","audio":"[(zai4)(ye3)]","pinyin":"zài yě","yueyin":"(zai`)(yể)","nghia":"lại nữa cũng"},{"hanzi":"也鑽不進去了","audio":"[(zuan1)(bu4)(jin4)(qu4)(le)]","pinyin":"zuān bù jìnqù le","yueyin":"(zoan-)(pu`)(chin` ch'uy`)(lơ)","nghia":"khoan không tiến được rồi"}]
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