/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-029",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-td01)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(bu4)(tong2)(ceng2)(ci4)]</td><td id=\"m_audio_1\">[(you3)]</td><td id=\"m_audio_2\">[(bu4)(tong2)(ceng2)(ci4)]</td><td id=\"m_audio_3\">[(de)(fa3)]</td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(pu` thúng)(s'ấng s'ư`)</td><td id=\"m_yueyin_1\">(yẩu)</td><td id=\"m_yueyin_2\">(pu` thúng)(s'ấng s'ư`)</td><td id=\"m_yueyin_3\">(tơ)(fả)</td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">不同層次</td><td id=\"m_hanzi_1\">有</td><td id=\"m_hanzi_2\">不同層次</td><td id=\"m_hanzi_3\">的法</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">bùtóng céngcì</td><td id=\"m_pinyin_1\">yǒu</td><td id=\"m_pinyin_2\">bùtóng céngcì</td><td id=\"m_pinyin_3\">de fǎ</td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">khác nhau tầng thứ</td><td id=\"m_nghia_1\">có</td><td id=\"m_nghia_2\">khác nhau tầng thứ</td><td id=\"m_nghia_3\">về Pháp</td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>khác nhau tầng thứ có khác nhau tầng thứ về Pháp</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br><font color=\"#000000\"><b>Tầng khác nhau có Pháp của tầng khác nhau</b></font></p>\n      </div>",
    tableData: [{"hanzi":"不同層次","audio":"[(bu4)(tong2)(ceng2)(ci4)]","pinyin":"bùtóng céngcì","yueyin":"(pu` thúng)(s'ấng s'ư`)","nghia":"khác nhau tầng thứ"},{"hanzi":"有","audio":"[(you3)]","pinyin":"yǒu","yueyin":"(yẩu)","nghia":"có"},{"hanzi":"不同層次","audio":"[(bu4)(tong2)(ceng2)(ci4)]","pinyin":"bùtóng céngcì","yueyin":"(pu` thúng)(s'ấng s'ư`)","nghia":"khác nhau tầng thứ"},{"hanzi":"的法","audio":"[(de)(fa3)]","pinyin":"de fǎ","yueyin":"(tơ)(fả)","nghia":"về Pháp"}]
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