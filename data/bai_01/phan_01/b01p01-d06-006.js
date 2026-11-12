/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(she4)(ji2)(dao4)]</td><td id=\"m_audio_1\">[(gao1)(ceng2)(ci4)(zhong1)]</td><td id=\"m_audio_2\">[(de)]</td><td id=\"m_audio_3\">[(li3)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(she4)(ji2)]</td><td id=\"m_audio_6\">[(de)]</td><td id=\"m_audio_7\">[(wen4)(ti2)]</td><td id=\"m_audio_8\">[(hen3)]</td><td id=\"m_audio_9\">[(da4)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shưa` chí)(tao`)</td><td id=\"m_yueyin_1\">(cao-)(s'ấng s'ư`)(trung-)</td><td id=\"m_yueyin_2\">(tơ)</td><td id=\"m_yueyin_3\">(lỉ)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(shưa` chí)</td><td id=\"m_yueyin_6\">(tơ)</td><td id=\"m_yueyin_7\">(guân` thí)</td><td id=\"m_yueyin_8\">(hẩn)</td><td id=\"m_yueyin_9\">(ta`)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">涉及到</td><td id=\"m_hanzi_1\">高層次中</td><td id=\"m_hanzi_2\">的</td><td id=\"m_hanzi_3\">理</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">涉及</td><td id=\"m_hanzi_6\">的</td><td id=\"m_hanzi_7\">問題</td><td id=\"m_hanzi_8\">很</td><td id=\"m_hanzi_9\">大</td><td id=\"m_hanzi_10\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shèjí dào</td><td id=\"m_pinyin_1\">gāo céngcì zhōng</td><td id=\"m_pinyin_2\">de</td><td id=\"m_pinyin_3\">lǐ</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">shèjí</td><td id=\"m_pinyin_6\">de</td><td id=\"m_pinyin_7\">wèntí</td><td id=\"m_pinyin_8\">hěn</td><td id=\"m_pinyin_9\">dà</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">liên quan đến</td><td id=\"m_nghia_1\">trong tầng thứ cao</td><td id=\"m_nghia_2\">về</td><td id=\"m_nghia_3\">lý</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">liên quan</td><td id=\"m_nghia_6\">về</td><td id=\"m_nghia_7\">vấn đề</td><td id=\"m_nghia_8\">rất</td><td id=\"m_nghia_9\">lớn</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">liên quan đến trong tầng thứ cao về lý, liên quan về </font><font color=\"#64748b\" style=\"\"><i>những</i></font><font color=\"#000000\" style=\"font-weight: bold;\"> vấn đề rất lớn.</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">liên quan đến [Pháp] lý tại cao tầng, liên quan đến những vấn đề rất lớn.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"涉及到","audio":"[(she4)(ji2)(dao4)]","pinyin":"shèjí dào","yueyin":"(shưa` chí)(tao`)","nghia":"đụng đến, liên quan đến"},{"hanzi":"高層次中","audio":"[(gao1)(ceng2)(ci4)(zhong1)]","pinyin":"gāo céngcì zhōng","yueyin":"(cao-)(s'ấng s'ư`)(trung-)","nghia":"trong tầng thứ cao"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"理","audio":"[(li3)]","pinyin":"lǐ","yueyin":"(lỉ)","nghia":"lý, nguyên lý"},{"hanzi":"涉及","audio":"[(she4)(ji2)]","pinyin":"shèjí","yueyin":"(shưa` chí)","nghia":"đụng đến, liên quan"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"問題","audio":"[(wen4)(ti2)]","pinyin":"wèntí","yueyin":"(guân` thí)","nghia":"vấn đề"},{"hanzi":"很","audio":"[(hen3)]","pinyin":"hěn","yueyin":"(hẩn)","nghia":"rất"},{"hanzi":"大","audio":"[(da4)]","pinyin":"dà","yueyin":"(ta`)","nghia":"lớn"}]
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