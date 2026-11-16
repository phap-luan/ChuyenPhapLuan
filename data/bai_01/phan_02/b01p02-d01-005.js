/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d01-005",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d01-005)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(hai2)(you3)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(wo2)(xiang3)(yao4)]</td><td id=\"m_audio_3\">[(wei4)(xiu1)(lian4)]</td><td id=\"m_audio_4\">[(zheng4)(yi)(zheng4)(ming2)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(hái)(yẩu)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(gủa)(xi:ảng yao`)</td><td id=\"m_yueyin_3\">(guây`)(xi:âu- li:en`)</td><td id=\"m_yueyin_4\">(trâng`)(y)(trâng`)(míng)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">還有</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">我想要</td><td id=\"m_hanzi_3\">為修煉</td><td id=\"m_hanzi_4\">正一正名</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">hái yǒu</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">wǒ xiǎngyào</td><td id=\"m_pinyin_3\">wèi xiūliàn</td><td id=\"m_pinyin_4\">zhèng yi zhèng míng</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">còn nữa</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">tôi mong muốn</td><td id=\"m_nghia_3\">vì tu luyện</td><td id=\"m_nghia_4\">chính nhất chính danh</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>còn nữa, tôi mong muốn vì tu luyện chính nhất chính danh.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Hơn nữa tôi muốn khôi phục lại danh tiếng chân chính của [pháp môn] tu luyện.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"還有","audio":"[(hai2)(you3)]","pinyin":"hái yǒu","yueyin":"(hái)(yẩu)","nghia":"còn nữa"},{"hanzi":"我想要","audio":"[(wo2)(xiang3)(yao4)]","pinyin":"wǒ xiǎngyào","yueyin":"(gủa)(xi:ảng yao`)","nghia":"tôi mong muốn"},{"hanzi":"為修煉","audio":"[(wei4)(xiu1)(lian4)]","pinyin":"wèi xiūliàn","yueyin":"(guây`)(xi:âu- li:en`)","nghia":"vì tu luyện"},{"hanzi":"正一正名","audio":"[(zheng4)(yi)(zheng4)(ming2)]","pinyin":"zhèng yi zhèng míng","yueyin":"(trâng`)(y)(trâng`)(míng)","nghia":"chính nhất chính danh, chính chính danh =正正名"}]
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