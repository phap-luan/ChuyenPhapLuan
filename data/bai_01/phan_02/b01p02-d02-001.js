/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d02-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d02-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhen1)(zheng4)(chuan2)(gong1)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(yao4)(jiang2)(fa3)]</td><td id=\"m_audio_3\">[(yao4)(shuo1)(dao4)(de)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trân- trâng`)(tr'oán)(cung-)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(yao`)(chi:áng fả)</td><td id=\"m_yueyin_3\">(yao`)(shua- tao`)(tơ)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">真正傳功</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">要講法</td><td id=\"m_hanzi_3\">要說道的</td><td id=\"m_hanzi_4\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhēnzhèng chuángōng</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">yào jiǎngfǎ</td><td id=\"m_pinyin_3\">yào shuōdào de</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chân chính truyền công</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">phải giảng Pháp</td><td id=\"m_nghia_3\">phải thuyết Đạo</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>chân chính truyền công, phải giảng Pháp phải thuyết Đạo</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Truyền công chân chính cần phải giảng về Pháp, phải thuyết về Đạo.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"真正傳功","audio":"[(zhen1)(zheng4)(chuan2)(gong1)]","pinyin":"zhēnzhèng chuángōng","yueyin":"(trân- trâng`)(tr'oán)(cung-)","nghia":"chân chính truyền công"},{"hanzi":"要講法","audio":"[(yao4)(jiang2)(fa3)]","pinyin":"yào jiǎngfǎ","yueyin":"(yao`)(chi:áng fả)","nghia":"phải giảng Pháp"},{"hanzi":"要說道的","audio":"[(yao4)(shuo1)(dao4)(de)]","pinyin":"yào shuōdào de","yueyin":"(yao`)(shua- tao`)(tơ)","nghia":"phải thuyết Đạo (說道: giải thích, bàn luận về Đạo)"}]
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