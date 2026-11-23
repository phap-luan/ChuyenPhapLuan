/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d05-009",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d05-009)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dui4)(xiu1)(lian4)(zhe3)]</td><td id=\"m_audio_1\">[(zai4)(bu4)(tong2)(ceng2)(ci4)]</td><td id=\"m_audio_2\">[(neng2)(qi3)(dao4)]</td><td id=\"m_audio_3\">[(bu4)(tong2)(de)]</td><td id=\"m_audio_4\">[(zhi2)(dao3)(zuo4)(yong4)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tuây`)(xi:âu- li:en` trửa)</td><td id=\"m_yueyin_1\">(zai`)(pu` thúng)(s'ấng s'ư`)</td><td id=\"m_yueyin_2\">(nấng)(ch'ỉ)(tao`)</td><td id=\"m_yueyin_3\">(pu` thúng)(tơ)</td><td id=\"m_yueyin_4\">(trí* tảo)(zua` yung`)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">對修煉者</td><td id=\"m_hanzi_1\">在不同層次</td><td id=\"m_hanzi_2\"><font color=\"#f97316\">能</font>起到</td><td id=\"m_hanzi_3\">不同的</td><td id=\"m_hanzi_4\">指導作用</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">duì xiūliànzhě</td><td id=\"m_pinyin_1\">zài bùtóng céngcì</td><td id=\"m_pinyin_2\">néng qǐ dào</td><td id=\"m_pinyin_3\">bùtóng de</td><td id=\"m_pinyin_4\">zhǐdǎo zuòyòng</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đối với tu luyện giả</td><td id=\"m_nghia_1\">ở khác nhau tầng thứ</td><td id=\"m_nghia_2\"><font color=\"#f97316\">có thể</font> khởi được</td><td id=\"m_nghia_3\">khác nhau về</td><td id=\"m_nghia_4\">chỉ đạo tác dụng</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">đối với tu luyện giả ở khác nhau tầng thứ </font><font color=\"#f97316\">có thể</font><font color=\"#000000\"> khởi được khác nhau về chỉ đạo tác dụng.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">đối với người tu luyện tại các tầng khác nhau, có thể phát huy tác dụng chỉ đạo khác nhau.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"對修煉者","audio":"[(dui4)(xiu1)(lian4)(zhe3)]","pinyin":"duì xiūliànzhě","yueyin":"(tuây`)(xi:âu- li:en` trửa)","nghia":"đối với tu luyện giả"},{"hanzi":"在不同層次","audio":"[(zai4)(bu4)(tong2)(ceng2)(ci4)]","pinyin":"zài bùtóng céngcì","yueyin":"(zai`)(pu` thúng)(s'ấng s'ư`)","nghia":"ở khác nhau tầng thứ"},{"hanzi":"能起到","audio":"[(neng2)(qi3)(dao4)]","pinyin":"néng qǐ dào","yueyin":"(nấng)(ch'ỉ)(tao`)","nghia":"có thể khởi được"},{"hanzi":"不同的","audio":"[(bu4)(tong2)(de)]","pinyin":"bùtóng de","yueyin":"(pu` thúng)(tơ)","nghia":"khác nhau về"},{"hanzi":"指導作用","audio":"[(zhi2)(dao3)(zuo4)(yong4)]","pinyin":"zhǐdǎo zuòyòng","yueyin":"(trí* tảo)(zua` yung`)","nghia":"chỉ đạo tác dụng"}]
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