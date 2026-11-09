/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-005)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(jiu4)]</td><td id=\"m_audio_1\">[(bu4)(zhi3)(shi4)]</td><td id=\"m_audio_2\">[(qu1)(bing4)]</td><td id=\"m_audio_3\">[(jian4)(shen1)]</td><td id=\"m_audio_4\">[(le)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(chi:âu`)</td><td id=\"m_yueyin_1\">(pu`)(trỉ* shi*`)</td><td id=\"m_yueyin_2\">(ch'uy- ping`)</td><td id=\"m_yueyin_3\">(chi:en` shân-)</td><td id=\"m_yueyin_4\">(lơ)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">就</td><td id=\"m_hanzi_1\">不只是</td><td id=\"m_hanzi_2\">祛病</td><td id=\"m_hanzi_3\">健身</td><td id=\"m_hanzi_4\">了</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">jiù</td><td id=\"m_pinyin_1\">bù zhǐshì</td><td id=\"m_pinyin_2\">qūbìng</td><td id=\"m_pinyin_3\">jiànshēn</td><td id=\"m_pinyin_4\">le</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">sẽ</td><td id=\"m_nghia_1\">không chỉ là</td><td id=\"m_nghia_2\">trừ bệnh</td><td id=\"m_nghia_3\">kiện thân</td><td id=\"m_nghia_4\">đâu</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>sẽ không chỉ là trừ bệnh kiện thân đâu.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">chứ không chỉ là chữa bệnh khoẻ người.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"sẽ, thì, liền (nhấn mạnh kết quả)"},{"hanzi":"不只是","audio":"[(bu4)(zhi3)(shi4)]","pinyin":"bù zhǐshì","yueyin":"(pu`)(trỉ* shi*`)","nghia":"không chỉ là"},{"hanzi":"祛病","audio":"[(qu1)(bing4)]","pinyin":"qūbìng","yueyin":"(ch'uy- ping`)","nghia":"trừ bệnh"},{"hanzi":"健身","audio":"[(jian4)(shen1)]","pinyin":"jiànshēn","yueyin":"(chi:en` shân-)","nghia":"kiện thân, khỏe người"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"đâu, rồi: trợ từ ngữ khí"}]
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