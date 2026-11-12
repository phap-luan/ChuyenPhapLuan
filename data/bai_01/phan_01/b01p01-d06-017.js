/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-017",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-017)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ke3)(shi4)]</td><td id=\"m_audio_1\">[(zai4)]</td><td id=\"m_audio_2\">[(ling4)(yi4)(ceng2)(ci4)]</td><td id=\"m_audio_3\">[(zhong1)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(you4)]</td><td id=\"m_audio_6\">[(bian4)]</td><td id=\"m_audio_7\">[(de)]</td><td id=\"m_audio_8\">[(bu2)(tai4)(hao3)]</td><td id=\"m_audio_9\">[(le)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(khửa shi*`)</td><td id=\"m_yueyin_1\">(zai`)</td><td id=\"m_yueyin_2\">(ling`)(y`)(s'ấng s'ư`)</td><td id=\"m_yueyin_3\">(trung-)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(yâu`)</td><td id=\"m_yueyin_6\">(pi:en`)</td><td id=\"m_yueyin_7\">(tơ)</td><td id=\"m_yueyin_8\">(pú)(thai`)(hảo)</td><td id=\"m_yueyin_9\">(lơ)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">可是</td><td id=\"m_hanzi_1\">在</td><td id=\"m_hanzi_2\">另一層次</td><td id=\"m_hanzi_3\">中</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">又</td><td id=\"m_hanzi_6\">變</td><td id=\"m_hanzi_7\">的</td><td id=\"m_hanzi_8\">不太好</td><td id=\"m_hanzi_9\">了</td><td id=\"m_hanzi_10\">，</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">kěshì</td><td id=\"m_pinyin_1\">zài</td><td id=\"m_pinyin_2\">lìng yì céngcì</td><td id=\"m_pinyin_3\">zhōng</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">yòu</td><td id=\"m_pinyin_6\">biàn</td><td id=\"m_pinyin_7\">de</td><td id=\"m_pinyin_8\">bú tài hǎo</td><td id=\"m_pinyin_9\">le</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nhưng</td><td id=\"m_nghia_1\">ở</td><td id=\"m_nghia_2\">một tầng thứ khác</td><td id=\"m_nghia_3\">bên trong</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">lại</td><td id=\"m_nghia_6\">biến</td><td id=\"m_nghia_7\">thành</td><td id=\"m_nghia_8\">không còn tốt</td><td id=\"m_nghia_9\">nữa</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>nhưng ở tầng thứ khác bên trong, lại biến thành không còn tốt nữa,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tuy nhiên tại tầng kia [họ] lại biến đổi không còn tốt nữa,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"可是","audio":"[(ke3)(shi4)]","pinyin":"kěshì","yueyin":"(khửa shi*`)","nghia":"nhưng"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"ở (khung 在…中)"},{"hanzi":"另一層次","audio":"[(ling4)(yi4)(ceng2)(ci4)]","pinyin":"lìng yì céngcì","yueyin":"(ling`)(y`)(s'ấng s'ư`)","nghia":"một tầng thứ khác"},{"hanzi":"中","audio":"[(zhong1)]","pinyin":"zhōng","yueyin":"(trung-)","nghia":"bên trong"},{"hanzi":"又","audio":"[(you4)]","pinyin":"yòu","yueyin":"(yâu`)","nghia":"lại"},{"hanzi":"變","audio":"[(bian4)]","pinyin":"biàn","yueyin":"(pi:en`)","nghia":"biến, biến đổi"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"thành = 得, trợ từ bổ ngữ trạng thái"},{"hanzi":"不太好","audio":"[(bu2)(tai4)(hao3)]","pinyin":"bú tài hǎo","yueyin":"(pú)(thai`)(hảo)","nghia":"không quá tốt, không còn tốt"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"trợ từ ngữ khí: tình huống đã thay đổi"}]
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