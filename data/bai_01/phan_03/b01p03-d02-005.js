/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d02-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d02-005)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(shi4)(jia1)(mou2)(ni2)(ye3)(jiang3)]</td><td id=\"m_audio_1\">[(xiu1)(fo2)]</td><td id=\"m_audio_2\">[(you3)(ba1)(wan4)(si4)(qian1)(fa3)(men2)]</td><td id=\"m_audio_3\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shi*` chi:a-)(mấu ní)(yể)(chi:ảng)</td><td id=\"m_yueyin_1\">(xi:âu-)(fúa)</td><td id=\"m_yueyin_2\">(yẩu)(pa- goan`)(sư` ch'i:en-)(fả mấn)</td><td id=\"m_yueyin_3\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">釋迦牟尼也講</td><td id=\"m_hanzi_1\">修佛</td><td id=\"m_hanzi_2\">有八萬四千法門</td><td id=\"m_hanzi_3\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shìjiā móuní yě jiǎng</td><td id=\"m_pinyin_1\">xiū fó</td><td id=\"m_pinyin_2\">yǒu bāwàn sìqiān fǎmén</td><td id=\"m_pinyin_3\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">thích ca mâu ni cũng giảng</td><td id=\"m_nghia_1\">tu Phật</td><td id=\"m_nghia_2\">có 8 vạn 4 nghìn pháp môn</td><td id=\"m_nghia_3\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>thích ca mâu ni cũng giảng tu Phật có 8 vạn 4 nghìn pháp môn,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Thích Ca Mâu Ni cũng giảng rằng tu Phật có 8 vạn 4 nghìn pháp môn;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"釋迦牟尼也講","audio":"[(shi4)(jia1)(mou2)(ni2)(ye3)(jiang3)]","pinyin":"shìjiā móuní yě jiǎng","yueyin":"(shi*` chi:a-)(mấu ní)(yể)(chi:ảng)","nghia":"thích ca mâu ni cũng giảng"},{"hanzi":"修佛","audio":"[(xiu1)(fo2)]","pinyin":"xiū fó","yueyin":"(xi:âu-)(fúa)","nghia":"tu Phật"},{"hanzi":"有八萬四千法門","audio":"[(you3)(ba1)(wan4)(si4)(qian1)(fa3)(men2)]","pinyin":"yǒu bāwàn sìqiān fǎmén","yueyin":"(yẩu)(pa- goan`)(sư` ch'i:en-)(fả mấn)","nghia":"có 8 vạn 4 nghìn pháp môn"}]
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