/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d06-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d06-003)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)]</td><td id=\"m_audio_1\">[(kan4)(mei2)(kan4)(dao4)]</td><td id=\"m_audio_2\">[(ne)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(kan4)(dao4)(le)]</td><td id=\"m_audio_5\"></td><td id=\"m_audio_6\">[(ke3)(shi4)]</td><td id=\"m_audio_7\">[(ta1)(kan4)(dao4)(de)]</td><td id=\"m_audio_8\">[(bu2)(shi4)(zhen1)(xiang4)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha-)</td><td id=\"m_yueyin_1\">(khan`)(mấy)(khan` tao`)</td><td id=\"m_yueyin_2\">(nơ)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(khan`)(tao`)(lơ)</td><td id=\"m_yueyin_5\"></td><td id=\"m_yueyin_6\">(khửa shi*`)</td><td id=\"m_yueyin_7\">(tha-)(khan`)(tao`)(tơ)</td><td id=\"m_yueyin_8\">(pú)(shi*`)(trân- xi:ang`)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他</td><td id=\"m_hanzi_1\"><font color=\"#ec4899\">看沒看</font>到</td><td id=\"m_hanzi_2\">呢</td><td id=\"m_hanzi_3\">?</td><td id=\"m_hanzi_4\">看到了</td><td id=\"m_hanzi_5\">,</td><td id=\"m_hanzi_6\">可是</td><td id=\"m_hanzi_7\">他看到<font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_8\">不是真相</td><td id=\"m_hanzi_9\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tā</td><td id=\"m_pinyin_1\">kàn méi kàndào</td><td id=\"m_pinyin_2\">ne</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">kàn dào le</td><td id=\"m_pinyin_5\"></td><td id=\"m_pinyin_6\">kěshì</td><td id=\"m_pinyin_7\">tā kàn dào de</td><td id=\"m_pinyin_8\">bú shì zhēnxiàng</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">ông ấy</td><td id=\"m_nghia_1\"><font color=\"#ec4899\">thấy (hay) không thấy</font> được</td><td id=\"m_nghia_2\">vậy</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">thấy được rồi</td><td id=\"m_nghia_5\"></td><td id=\"m_nghia_6\">nhưng</td><td id=\"m_nghia_7\">ông ta thấy được (de)</td><td id=\"m_nghia_8\">không phải chân tướng</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">ông ấy </font><font color=\"#ec4899\" style=\"font-weight: bold;\">thấy (hay) không thấy</font><font color=\"#000000\" style=\"font-weight: bold;\"> được vậy? thấy được rồi, nhưng ông ta thấy được </font><font color=\"#3b82f6\" style=\"\"><i style=\"\">(de)</i></font><font color=\"#000000\" style=\"font-weight: bold;\"> không phải chân tướng.</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Vị ấy thấy được không? Đã thấy, nhưng điều vị ấy đã thấy không phải là chân tướng.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"ông ấy"},{"hanzi":"看沒看到","audio":"[(kan4)(mei2)(kan4)(dao4)]","pinyin":"kàn méi kàndào","yueyin":"(khan`)(mấy)(khan` tao`)","nghia":"thấy (hay) không thấy được"},{"hanzi":"呢","audio":"[(ne)]","pinyin":"ne","yueyin":"(nơ)","nghia":"trợ từ nghi vấn, giọng tự vấn"},{"hanzi":"看到了","audio":"[(kan4)(dao4)(le)]","pinyin":"kàn dào le","yueyin":"(khan`)(tao`)(lơ)","nghia":"thấy được rồi"},{"hanzi":"可是","audio":"[(ke3)(shi4)]","pinyin":"kěshì","yueyin":"(khửa shi*`)","nghia":"nhưng"},{"hanzi":"他看到的","audio":"[(ta1)(kan4)(dao4)(de)]","pinyin":"tā kàn dào de","yueyin":"(tha-)(khan`)(tao`)(tơ)","nghia":"ông ta thấy được (de)"},{"hanzi":"不是真相","audio":"[(bu2)(shi4)(zhen1)(xiang4)]","pinyin":"bú shì zhēnxiàng","yueyin":"(pú)(shi*`)(trân- xi:ang`)","nghia":"không phải chân tướng"}]
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