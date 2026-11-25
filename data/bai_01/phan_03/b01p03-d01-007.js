/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d01-007",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d01-007)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(shi4)(jia1)(mou2)(ni2)]</td><td id=\"m_audio_1\">[(dang1)(shi2)(chuan2)(de)(fa3)]</td><td id=\"m_audio_2\">[(shi4)(zhen1)(dui4)]</td><td id=\"m_audio_3\">[(na4)(yang4)(de)(qing2)(kuang4)]</td><td id=\"m_audio_4\">[(chuan2)(de)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shi*` chi:a-)(mấu ní)</td><td id=\"m_yueyin_1\">(tang- shí*)(tr'oán)(tơ)(fả)</td><td id=\"m_yueyin_2\">(shi*`)(trân- tuây`)</td><td id=\"m_yueyin_3\">(na` yang`)(tơ)(ch'íng khoang`)</td><td id=\"m_yueyin_4\">(tr'oán)(tơ)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">釋迦牟尼</td><td id=\"m_hanzi_1\">當時傳的法</td><td id=\"m_hanzi_2\">是針對</td><td id=\"m_hanzi_3\">那樣的情況</td><td id=\"m_hanzi_4\">傳<font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_5\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shìjiā móuní</td><td id=\"m_pinyin_1\">dāngshí chuán de fǎ</td><td id=\"m_pinyin_2\">shì zhēnduì</td><td id=\"m_pinyin_3\">nàyàng de qíngkuàng</td><td id=\"m_pinyin_4\">chuán de</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">thích ca mâu ni</td><td id=\"m_nghia_1\">đương thời truyền về Pháp</td><td id=\"m_nghia_2\">là nhắm vào</td><td id=\"m_nghia_3\">như thế về tình huống</td><td id=\"m_nghia_4\">truyền (de)</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">thích ca mâu ni đương thời truyền về Pháp là nhắm vào [như thế về tình huống]&nbsp;</font><font style=\"font-weight: bold;\" color=\"#64748b\"><i>(mà)</i></font><font color=\"#000000\" style=\"font-weight: bold;\"> truyền </font><font color=\"#3b82f6\" style=\"\"><i style=\"\">(de)</i></font><font color=\"#000000\" style=\"font-weight: bold;\">,</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Pháp mà Thích Ca Mâu Ni thời đó truyền là nhắm thẳng vào tình huống bấy giờ mà truyền;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"釋迦牟尼","audio":"[(shi4)(jia1)(mou2)(ni2)]","pinyin":"shìjiā móuní","yueyin":"(shi*` chi:a-)(mấu ní)","nghia":"thích ca mâu ni"},{"hanzi":"當時傳的法","audio":"[(dang1)(shi2)(chuan2)(de)(fa3)]","pinyin":"dāngshí chuán de fǎ","yueyin":"(tang- shí*)(tr'oán)(tơ)(fả)","nghia":"đương thời truyền về Pháp"},{"hanzi":"是針對","audio":"[(shi4)(zhen1)(dui4)]","pinyin":"shì zhēnduì","yueyin":"(shi*`)(trân- tuây`)","nghia":"là nhắm vào"},{"hanzi":"那樣的情況","audio":"[(na4)(yang4)(de)(qing2)(kuang4)]","pinyin":"nàyàng de qíngkuàng","yueyin":"(na` yang`)(tơ)(ch'íng khoang`)","nghia":"như thế về tình huống"},{"hanzi":"傳的","audio":"[(chuan2)(de)]","pinyin":"chuán de","yueyin":"(tr'oán)(tơ)","nghia":"truyền (de) (的 cuối cấu trúc 是…的)"}]
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