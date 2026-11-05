/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-008",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-008.mp3)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(zhi3)(shi4)(shuo1)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(gao1)(ceng2)(ci4)(shang4)]</td><td id=\"m_audio_3\">[(de)]</td><td id=\"m_audio_4\">[(dong1)(xi)]</td><td id=\"m_audio_5\"></td><td id=\"m_audio_6\">[(ta1)(men)]</td><td id=\"m_audio_7\">[(mei2)(you3)(chuan2)]</td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)(trỉ* shi*`)(shua-)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(cao-)(s'ấng s'ư`)(shang`)</td><td id=\"m_yueyin_3\">(tơ)</td><td id=\"m_yueyin_4\">(tung- xi)</td><td id=\"m_yueyin_5\"></td><td id=\"m_yueyin_6\">(tha- mân)</td><td id=\"m_yueyin_7\">(mấy yẩu)(tr'oán)</td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我只是說</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">高層次上</td><td id=\"m_hanzi_3\">的</td><td id=\"m_hanzi_4\">東西</td><td id=\"m_hanzi_5\">,</td><td id=\"m_hanzi_6\">他們</td><td id=\"m_hanzi_7\">沒有傳</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ zhǐshì shuō</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">gāo céngcì shàng</td><td id=\"m_pinyin_3\">de</td><td id=\"m_pinyin_4\">dōngxi</td><td id=\"m_pinyin_5\"></td><td id=\"m_pinyin_6\">tāmen</td><td id=\"m_pinyin_7\">méiyǒu chuán</td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi chỉ là nói</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">trên tầng thứ cao</td><td id=\"m_nghia_3\">về</td><td id=\"m_nghia_4\">mọi thứ</td><td id=\"m_nghia_5\"></td><td id=\"m_nghia_6\">họ</td><td id=\"m_nghia_7\">chưa có truyền</td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>tôi chỉ là nói, trên tầng thứ cao về mọi thứ, họ chưa có truyền.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">tôi chỉ nói rằng họ không truyền gì tại cao tầng.</span></p>\n      </div>",
    tableData: [{"hanzi":"我只是說","audio":"[(wo3)(zhi3)(shi4)(shuo1)]","pinyin":"wǒ zhǐshì shuō","yueyin":"(gủa)(trỉ* shi*`)(shua-)","nghia":"tôi chỉ là nói"},{"hanzi":"高層次上","audio":"[(gao1)(ceng2)(ci4)(shang4)]","pinyin":"gāo céngcì shàng","yueyin":"(cao-)(s'ấng s'ư`)(shang`)","nghia":"trên tầng thứ cao"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ"},{"hanzi":"東西","audio":"[(dong1)(xi)]","pinyin":"dōngxi","yueyin":"(tung- xi)","nghia":"mọi thứ"},{"hanzi":"他們","audio":"[(ta1)(men)]","pinyin":"tāmen","yueyin":"(tha- mân)","nghia":"họ"},{"hanzi":"沒有傳","audio":"[(mei2)(you3)(chuan2)]","pinyin":"méiyǒu chuán","yueyin":"(mấy yẩu)(tr'oán)","nghia":"chưa có truyền"}]
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