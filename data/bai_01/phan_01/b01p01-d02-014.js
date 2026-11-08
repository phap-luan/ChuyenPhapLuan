/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-014",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-014)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ni3)]</td><td id=\"m_audio_1\">[(hui4)]</td><td id=\"m_audio_2\">[(jue2)(de)]</td><td id=\"m_audio_3\">[(zhe4)]</td><td id=\"m_audio_4\">[(duan4)]</td><td id=\"m_audio_5\">[(shi2)(jian1)]</td><td id=\"m_audio_6\">[(shi4)]</td><td id=\"m_audio_7\">[(fei1)(chang2)]</td><td id=\"m_audio_8\">[(ke2)(xi3)]</td><td id=\"m_audio_9\">[(de)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(nỉ)</td><td id=\"m_yueyin_1\">(huây`)</td><td id=\"m_yueyin_2\">(chuế tơ)</td><td id=\"m_yueyin_3\">(trưa`)</td><td id=\"m_yueyin_4\">(toan`)</td><td id=\"m_yueyin_5\">(shí* chi:en-)</td><td id=\"m_yueyin_6\">(shi*`)</td><td id=\"m_yueyin_7\">(fây- tr'áng)</td><td id=\"m_yueyin_8\">(khửa xỉ)</td><td id=\"m_yueyin_9\">(tơ)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">你</td><td id=\"m_hanzi_1\">會</td><td id=\"m_hanzi_2\">覺的</td><td id=\"m_hanzi_3\">這</td><td id=\"m_hanzi_4\">段</td><td id=\"m_hanzi_5\">時間</td><td id=\"m_hanzi_6\"><font color=\"#3b82f6\">是</font></td><td id=\"m_hanzi_7\">非常</td><td id=\"m_hanzi_8\">可喜</td><td id=\"m_hanzi_9\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_10\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">nǐ</td><td id=\"m_pinyin_1\">huì</td><td id=\"m_pinyin_2\">juéde</td><td id=\"m_pinyin_3\">zhè</td><td id=\"m_pinyin_4\">duàn</td><td id=\"m_pinyin_5\">shíjiān</td><td id=\"m_pinyin_6\">shì</td><td id=\"m_pinyin_7\">fēicháng</td><td id=\"m_pinyin_8\">kěxǐ</td><td id=\"m_pinyin_9\">de</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">bạn</td><td id=\"m_nghia_1\">sẽ</td><td id=\"m_nghia_2\">thấy rằng</td><td id=\"m_nghia_3\">này</td><td id=\"m_nghia_4\">đoạn</td><td id=\"m_nghia_5\">thời gian</td><td id=\"m_nghia_6\">là</td><td id=\"m_nghia_7\">phi thường</td><td id=\"m_nghia_8\">đáng mừng</td><td id=\"m_nghia_9\">nhấn mạnh</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">bạn sẽ thấy rằng này đoạn thời gian </b><b style=\"\"><font color=\"#3b82f6\">là</font></b><b style=\"color: rgb(0, 0, 0);\"> phi thường đáng mừng </b><i style=\"\"><font color=\"#3b82f6\">nhấn mạnh</font></i><b style=\"color: rgb(0, 0, 0);\">.</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">chư vị sẽ thấy rằng khoảng thời gian này thật đáng mừng phi thường.</span></p>\n      </div>",
    tableData: [{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"會","audio":"[(hui4)]","pinyin":"huì","yueyin":"(huây`)","nghia":"sẽ"},{"hanzi":"覺的","audio":"[(jue2)(de)]","pinyin":"juéde","yueyin":"(chuế tơ)","nghia":"cảm thấy, thấy rằng (=覺得 )"},{"hanzi":"這","audio":"[(zhe4)]","pinyin":"zhè","yueyin":"(trưa`)","nghia":"này"},{"hanzi":"段","audio":"[(duan4)]","pinyin":"duàn","yueyin":"(toan`)","nghia":"lượng từ (đoạn, khoảng)"},{"hanzi":"時間","audio":"[(shi2)(jian1)]","pinyin":"shíjiān","yueyin":"(shí* chi:en-)","nghia":"thời gian"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"非常","audio":"[(fei1)(chang2)]","pinyin":"fēicháng","yueyin":"(fây- tr'áng)","nghia":"phi thường, vô cùng, rất"},{"hanzi":"可喜","audio":"[(ke2)(xi3)]","pinyin":"kěxǐ","yueyin":"(khửa xỉ)","nghia":"đáng mừng, đáng vui"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"nhấn mạnh: trợ từ cuối trong cấu trúc 是…的"}]
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