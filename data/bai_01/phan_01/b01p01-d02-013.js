/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-013",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-013)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)]</td><td id=\"m_audio_1\">[(shuo1)]</td><td id=\"m_audio_2\">[(zhen1)(shi4)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(jiang1)(lai2)]</td><td id=\"m_audio_6\">[(ni3)]</td><td id=\"m_audio_7\">[(hui4)]</td><td id=\"m_audio_8\">[(zhi1)(dao4)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)</td><td id=\"m_yueyin_1\">(shua-)</td><td id=\"m_yueyin_2\">(trân-)(shi*`)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(chi:ang- lái)</td><td id=\"m_yueyin_6\">(nỉ)</td><td id=\"m_yueyin_7\">(huây`)</td><td id=\"m_yueyin_8\">(tri*- tao`)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我</td><td id=\"m_hanzi_1\">說</td><td id=\"m_hanzi_2\">真是</td><td id=\"m_hanzi_3\">…</td><td id=\"m_hanzi_4\">…</td><td id=\"m_hanzi_5\">將來</td><td id=\"m_hanzi_6\">你</td><td id=\"m_hanzi_7\">會</td><td id=\"m_hanzi_8\">知道</td><td id=\"m_hanzi_9\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ</td><td id=\"m_pinyin_1\">shuō</td><td id=\"m_pinyin_2\">zhēn shì</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">jiānglái</td><td id=\"m_pinyin_6\">nǐ</td><td id=\"m_pinyin_7\">huì</td><td id=\"m_pinyin_8\">zhīdào</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi</td><td id=\"m_nghia_1\">nói</td><td id=\"m_nghia_2\">thật là</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">tương lai</td><td id=\"m_nghia_6\">bạn</td><td id=\"m_nghia_7\">sẽ</td><td id=\"m_nghia_8\">biết</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\">\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">tôi nói thật là…… tương lai bạn sẽ biết,</span><span></span></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">tôi nói thật rằng…… sau này chư vị sẽ hiểu ra;</span></p>\n      </div>",
    tableData: [{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"說","audio":"[(shuo1)]","pinyin":"shuō","yueyin":"(shua-)","nghia":"nói"},{"hanzi":"真是","audio":"[(zhen1)(shi4)]","pinyin":"zhēn shì","yueyin":"(trân-)(shi*`)","nghia":"thật là"},{"hanzi":"將來","audio":"[(jiang1)(lai2)]","pinyin":"jiānglái","yueyin":"(chi:ang- lái)","nghia":"tương lai, sau này"},{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"會","audio":"[(hui4)]","pinyin":"huì","yueyin":"(huây`)","nghia":"sẽ"},{"hanzi":"知道","audio":"[(zhi1)(dao4)]","pinyin":"zhīdào","yueyin":"(tri*- tao`)","nghia":"biết"}]
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