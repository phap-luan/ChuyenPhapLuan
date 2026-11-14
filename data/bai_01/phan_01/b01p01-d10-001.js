/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d10-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d10-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\"></td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(an4)(zhao4)]</td><td id=\"m_audio_3\">[(xiu1)(lian4)(de)(shuo1)(fa3)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(qi4)]</td><td id=\"m_audio_6\">[(yao4)(suan4)]</td><td id=\"m_audio_7\">[(ne)]</td><td id=\"m_audio_8\"></td><td id=\"m_audio_9\">[(you3)]</td><td id=\"m_audio_10\">[(san1)(ge4)(ceng2)(ci4)]</td><td id=\"m_audio_11\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\"></td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(an` trao`)</td><td id=\"m_yueyin_3\">(xi:âu- li:en`)(tơ)(shua- fả)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(ch'i`)</td><td id=\"m_yueyin_6\">(yao`)(soan`)</td><td id=\"m_yueyin_7\">(nưa)</td><td id=\"m_yueyin_8\"></td><td id=\"m_yueyin_9\">(yẩu)</td><td id=\"m_yueyin_10\">(san-)(cưa`)(s'ấng s'ư`)</td><td id=\"m_yueyin_11\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\"> </td><td id=\"m_hanzi_1\"> </td><td id=\"m_hanzi_2\">按照</td><td id=\"m_hanzi_3\">修煉的說法</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">氣</td><td id=\"m_hanzi_6\">要算</td><td id=\"m_hanzi_7\"><font color=\"#3b82f6\">呢</font></td><td id=\"m_hanzi_8\">,</td><td id=\"m_hanzi_9\">有</td><td id=\"m_hanzi_10\">三個層次</td><td id=\"m_hanzi_11\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\"></td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">ànzhào</td><td id=\"m_pinyin_3\">xiūliàn de shuōfǎ</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">qì</td><td id=\"m_pinyin_6\">yào suàn</td><td id=\"m_pinyin_7\">ne</td><td id=\"m_pinyin_8\"></td><td id=\"m_pinyin_9\">yǒu</td><td id=\"m_pinyin_10\">sān gè céngcì</td><td id=\"m_pinyin_11\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\"></td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">dựa theo</td><td id=\"m_nghia_3\">tu luyện về thuyết pháp</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">khí</td><td id=\"m_nghia_6\">nếu tính</td><td id=\"m_nghia_7\">vậy</td><td id=\"m_nghia_8\"></td><td id=\"m_nghia_9\">có</td><td id=\"m_nghia_10\">ba cái tầng thứ</td><td id=\"m_nghia_11\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">dựa theo tu luyện về thuyết pháp, khí nếu tính </font><font color=\"#3b82f6\">vậy</font><font color=\"#000000\">, có ba cái tầng thứ.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Chiểu theo thuyết pháp tu luyện, khí được tính [thế nào]: có ba tầng.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"按照","audio":"[(an4)(zhao4)]","pinyin":"ànzhào","yueyin":"(an` trao`)","nghia":"dựa theo"},{"hanzi":"修煉的說法","audio":"[(xiu1)(lian4)(de)(shuo1)(fa3)]","pinyin":"xiūliàn de shuōfǎ","yueyin":"(xi:âu- li:en`)(tơ)(shua- fả)","nghia":"tu luyện về thuyết pháp"},{"hanzi":"氣","audio":"[(qi4)]","pinyin":"qì","yueyin":"(ch'i`)","nghia":"khí"},{"hanzi":"要算","audio":"[(yao4)(suan4)]","pinyin":"yào suàn","yueyin":"(yao`)(soan`)","nghia":"nếu tính"},{"hanzi":"呢","audio":"[(ne)]","pinyin":"ne","yueyin":"(nưa)","nghia":"trợ từ ngắt nhịp"},{"hanzi":"有","audio":"[(you3)]","pinyin":"yǒu","yueyin":"(yẩu)","nghia":"có"},{"hanzi":"三個層次","audio":"[(san1)(ge4)(ceng2)(ci4)]","pinyin":"sān gè céngcì","yueyin":"(san-)(cưa`)(s'ấng s'ư`)","nghia":"ba cái tầng thứ"}]
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