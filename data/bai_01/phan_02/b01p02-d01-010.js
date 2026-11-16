/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d01-010",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d01-010)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo2)(ye3)(yao4)]</td><td id=\"m_audio_1\">[(ba3)(ta1)(jiang3)(chu1)(lai2)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(tong2)(shi2)]</td><td id=\"m_audio_4\">[(gei2)(wo3)(men)(de)(xue2)(yuan2)]</td><td id=\"m_audio_5\">[(ba3)(zhe4)(xie1)(wen4)(ti2)]</td><td id=\"m_audio_6\">[(jie3)(jue2)(le)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)(yể)(yao`)</td><td id=\"m_yueyin_1\">(pả)(tha-)(chi:ảng)(tr'u- lái)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(thúng shí*)</td><td id=\"m_yueyin_4\">(cẩy)(gủa mân)(tơ)(xuế doán)</td><td id=\"m_yueyin_5\">(pả)(trưa` xi:ê-)(guân` thí)</td><td id=\"m_yueyin_6\">(chi:ể chuế)(lơ)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我也要</td><td id=\"m_hanzi_1\">把它講出來</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">同時</td><td id=\"m_hanzi_4\">給<font color=\"#a855f7\">我們</font>的<font color=\"#f97316\">學員</font></td><td id=\"m_hanzi_5\">把<font color=\"#3b82f6\">這</font>些問題</td><td id=\"m_hanzi_6\">解決了</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ yě yào</td><td id=\"m_pinyin_1\">bǎ tā jiǎng chūlái</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">tóngshí</td><td id=\"m_pinyin_4\">gěi wǒmen de xuéyuán</td><td id=\"m_pinyin_5\">bǎ zhèxiē wèntí</td><td id=\"m_pinyin_6\">jiějué le</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi cũng phải</td><td id=\"m_nghia_1\">đem nó giảng xuất ra</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">đồng thời</td><td id=\"m_nghia_4\">giúp học viên của chúng tôi</td><td id=\"m_nghia_5\">đem những vấn đề này</td><td id=\"m_nghia_6\">giải quyết hết</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">tôi cũng phải đem nó giảng xuất ra, đồng thời giúp [</font><font color=\"#f97316\">học viên</font><font color=\"#000000\"> của </font><font color=\"#a855f7\">chúng tôi</font><font color=\"#000000\">] đem [những vấn đề </font><font color=\"#3b82f6\">này</font><font color=\"#000000\">] giải quyết hết.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">tôi cũng cần giảng rõ; đồng thời [tôi] cũng giúp học viên của chúng ta giải quyết những vấn đề ấy.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我也要","audio":"[(wo2)(ye3)(yao4)]","pinyin":"wǒ yě yào","yueyin":"(gủa)(yể)(yao`)","nghia":"tôi cũng phải"},{"hanzi":"把它講出來","audio":"[(ba3)(ta1)(jiang3)(chu1)(lai2)]","pinyin":"bǎ tā jiǎng chūlái","yueyin":"(pả)(tha-)(chi:ảng)(tr'u- lái)","nghia":"đem nó giảng xuất ra"},{"hanzi":"同時","audio":"[(tong2)(shi2)]","pinyin":"tóngshí","yueyin":"(thúng shí*)","nghia":"đồng thời"},{"hanzi":"給我們的學員","audio":"[(gei2)(wo3)(men)(de)(xue2)(yuan2)]","pinyin":"gěi wǒmen de xuéyuán","yueyin":"(cẩy)(gủa mân)(tơ)(xuế doán)","nghia":"giúp học viên của chúng tôi"},{"hanzi":"把這些問題","audio":"[(ba3)(zhe4)(xie1)(wen4)(ti2)]","pinyin":"bǎ zhèxiē wèntí","yueyin":"(pả)(trưa` xi:ê-)(guân` thí)","nghia":"đem những vấn đề này"},{"hanzi":"解決了","audio":"[(jie3)(jue2)(le)]","pinyin":"jiějué le","yueyin":"(chi:ể chuế)(lơ)","nghia":"giải quyết hết"}]
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