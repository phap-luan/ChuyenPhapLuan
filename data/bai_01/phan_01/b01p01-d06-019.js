/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-019",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-019)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zui4)(hou4)]</td><td id=\"m_audio_1\">[(jiu4)]</td><td id=\"m_audio_2\">[(diao4)(dao4)]</td><td id=\"m_audio_3\">[(ren2)(lei4)]</td><td id=\"m_audio_4\">[(zhe4)(yi4)(ceng2)(ci4)(zhong1)]</td><td id=\"m_audio_5\">[(lai2)]</td><td id=\"m_audio_6\">[(le)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(zuây` hâu`)</td><td id=\"m_yueyin_1\">(chi:âu`)</td><td id=\"m_yueyin_2\">(ti:ao`)(tao`)</td><td id=\"m_yueyin_3\">(rấn lây`)</td><td id=\"m_yueyin_4\">(trưa`)(y`)(s'ấng s'ư`)(trung-)</td><td id=\"m_yueyin_5\">(lái)</td><td id=\"m_yueyin_6\">(lơ)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">最後</td><td id=\"m_hanzi_1\">就</td><td id=\"m_hanzi_2\"><font color=\"#3b82f6\">掉到</font></td><td id=\"m_hanzi_3\">人類</td><td id=\"m_hanzi_4\">這一層次中</td><td id=\"m_hanzi_5\"><font color=\"#3b82f6\">來</font></td><td id=\"m_hanzi_6\">了</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zuìhòu</td><td id=\"m_pinyin_1\">jiù</td><td id=\"m_pinyin_2\">diào dào</td><td id=\"m_pinyin_3\">rénlèi</td><td id=\"m_pinyin_4\">zhè yì céngcì zhōng</td><td id=\"m_pinyin_5\">lái</td><td id=\"m_pinyin_6\">le</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">cuối cùng</td><td id=\"m_nghia_1\">liền</td><td id=\"m_nghia_2\">rớt đến</td><td id=\"m_nghia_3\">nhân loại</td><td id=\"m_nghia_4\">trong tầng thứ này</td><td id=\"m_nghia_5\">vào</td><td id=\"m_nghia_6\">rồi</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">cuối cùng liền </font><font color=\"#3b82f6\">rớt đến</font><font color=\"#000000\"> nhân loại trong tầng thứ này </font><font color=\"#3b82f6\">vào</font><font color=\"#000000\"> rồi&nbsp;</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">cuối cùng rớt xuống đến tầng của nhân loại.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"最後","audio":"[(zui4)(hou4)]","pinyin":"zuìhòu","yueyin":"(zuây` hâu`)","nghia":"cuối cùng"},{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"sẽ, liền, thì"},{"hanzi":"掉到","audio":"[(diao4)(dao4)]","pinyin":"diào dào","yueyin":"(ti:ao`)(tao`)","nghia":"rơi đến, rớt đến"},{"hanzi":"人類","audio":"[(ren2)(lei4)]","pinyin":"rénlèi","yueyin":"(rấn lây`)","nghia":"nhân loại"},{"hanzi":"這一層次中","audio":"[(zhe4)(yi4)(ceng2)(ci4)(zhong1)]","pinyin":"zhè yì céngcì zhōng","yueyin":"(trưa`)(y`)(s'ấng s'ư`)(trung-)","nghia":"trong tầng thứ này"},{"hanzi":"來","audio":"[(lai2)]","pinyin":"lái","yueyin":"(lái)","nghia":"vào (bổ ngữ xu hướng của 掉到: rơi vào đến)"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"trợ từ ngữ khí: sự việc đã xảy ra"}]
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