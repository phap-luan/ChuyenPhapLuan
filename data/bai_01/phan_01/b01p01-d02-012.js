/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-012",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-012)]</p><p>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)]</td><td id=\"m_audio_1\">[(jue2)(de)]</td><td id=\"m_audio_2\">[(neng2)(gou4)]</td><td id=\"m_audio_3\">[(zhi2)(jie1)]</td><td id=\"m_audio_4\">[(ting1)(dao4)]</td><td id=\"m_audio_5\">[(wo3)]</td><td id=\"m_audio_6\">[(chuang2)(o1)(ng)]</td><td id=\"m_audio_7\">[(jiang2)(fa3)]</td><td id=\"m_audio_8\">[(de)]</td><td id=\"m_audio_9\">[(ren2)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)</td><td id=\"m_yueyin_1\">(chuế tơ)</td><td id=\"m_yueyin_2\">(nấng câu`)</td><td id=\"m_yueyin_3\">(trí* chi:ê-)</td><td id=\"m_yueyin_4\">(thing- tao`)</td><td id=\"m_yueyin_5\">(gủa)</td><td id=\"m_yueyin_6\">(tr'oáng ua- ng)</td><td id=\"m_yueyin_7\">(chi:áng fả)</td><td id=\"m_yueyin_8\">(tơ)</td><td id=\"m_yueyin_9\">(rấn)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我</td><td id=\"m_hanzi_1\">覺的</td><td id=\"m_hanzi_2\">能夠</td><td id=\"m_hanzi_3\">直接</td><td id=\"m_hanzi_4\">聽到</td><td id=\"m_hanzi_5\">我</td><td id=\"m_hanzi_6\">傳功</td><td id=\"m_hanzi_7\">講法</td><td id=\"m_hanzi_8\">的</td><td id=\"m_hanzi_9\">人</td><td id=\"m_hanzi_10\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ</td><td id=\"m_pinyin_1\">juéde</td><td id=\"m_pinyin_2\">nénggòu</td><td id=\"m_pinyin_3\">zhíjiē</td><td id=\"m_pinyin_4\">tīngdào</td><td id=\"m_pinyin_5\">wǒ</td><td id=\"m_pinyin_6\">chuángōng</td><td id=\"m_pinyin_7\">jiǎngfǎ</td><td id=\"m_pinyin_8\">de</td><td id=\"m_pinyin_9\">rén</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi</td><td id=\"m_nghia_1\">thấy rằng</td><td id=\"m_nghia_2\">có thể đủ</td><td id=\"m_nghia_3\">trực tiếp</td><td id=\"m_nghia_4\">nghe được</td><td id=\"m_nghia_5\">tôi</td><td id=\"m_nghia_6\">truyền công</td><td id=\"m_nghia_7\">giảng Pháp</td><td id=\"m_nghia_8\">về</td><td id=\"m_nghia_9\">người</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">tôi thấy rằng có thể đủ trực tiếp nghe được tôi truyền công giảng Pháp về </b><i style=\"\"><font color=\"#64748b\">(những)&nbsp;</font></i><b style=\"color: rgb(0, 0, 0);\">người,</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tôi thấy rằng những người trực tiếp nghe tôi truyền công giảng Pháp,</span></p>\n      </div>",
    tableData: [{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"覺的","audio":"[(jue2)(de)]","pinyin":"juéde","yueyin":"(chuế tơ)","nghia":"cảm thấy, thấy rằng (=覺得 )"},{"hanzi":"能夠","audio":"[(neng2)(gou4)]","pinyin":"nénggòu","yueyin":"(nấng câu`)","nghia":"có thể đủ"},{"hanzi":"直接","audio":"[(zhi2)(jie1)]","pinyin":"zhíjiē","yueyin":"(trí* chi:ê-)","nghia":"trực tiếp"},{"hanzi":"聽到","audio":"[(ting1)(dao4)]","pinyin":"tīngdào","yueyin":"(thing- tao`)","nghia":"nghe được, nghe thấy"},{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"傳功","audio":"[(chuang2)(o1)(ng)]","pinyin":"chuángōng","yueyin":"(tr'oáng ua- ng)","nghia":"truyền công"},{"hanzi":"講法","audio":"[(jiang2)(fa3)]","pinyin":"jiǎngfǎ","yueyin":"(chi:áng fả)","nghia":"giảng Pháp"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"人","audio":"[(ren2)]","pinyin":"rén","yueyin":"(rấn)","nghia":"người"}]
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