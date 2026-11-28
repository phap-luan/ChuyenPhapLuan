/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d04-007",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d04-007)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ren2)(lei4)(de)(dao4)(de2)(shui2)(zhun3)]</td><td id=\"m_audio_1\">[(zai4)(da4)(hua2)(po1)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(shi4)(feng1)(ri4)(xia4)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(wei2)(li4)(shi4)(tu2)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(rấn lây`)(tơ)(tao` tứa)(shuấy truẩn)</td><td id=\"m_yueyin_1\">(zai`)(ta`)(hóa p'ua-)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(shi*`)(fâng-)(ri*`)(xi:a`)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(guấy)(li`)(shi*`)(thú)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">人類的道德水準</td><td id=\"m_hanzi_1\">在大<font color=\"#ec4899\">滑坡</font></td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">世風日下</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">唯利是圖</td><td id=\"m_hanzi_6\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">rénlèi de dàodé shuǐzhǔn</td><td id=\"m_pinyin_1\">zài dà huápō</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">shì fēng rì xià</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">wéi lì shì tú</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nhân loại về đạo đức thủy chuẩn</td><td id=\"m_nghia_1\">đang <font color=\"#ec4899\">trượt dốc</font> lớn</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">thế phong nhật hạ</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">duy lợi thị đồ</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>nhân loại về đạo đức thủy chuẩn đang trượt dốc lớn, thế phong nhật hạ, duy lợi thị đồ,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Chuẩn mực đạo đức của nhân loại đang trượt trên dốc lớn, đạo đức thế gian trượt xuống hàng ngày; chỉ chạy theo lợi,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"人類的道德水準","audio":"[(ren2)(lei4)(de)(dao4)(de2)(shui2)(zhun3)]","pinyin":"rénlèi de dàodé shuǐzhǔn","yueyin":"(rấn lây`)(tơ)(tao` tứa)(shuấy truẩn)","nghia":"nhân loại về đạo đức thủy chuẩn"},{"hanzi":"在大滑坡","audio":"[(zai4)(da4)(hua2)(po1)]","pinyin":"zài dà huápō","yueyin":"(zai`)(ta`)(hóa p'ua-)","nghia":"đang trượt dốc lớn"},{"hanzi":"世風日下","audio":"[(shi4)(feng1)(ri4)(xia4)]","pinyin":"shì fēng rì xià","yueyin":"(shi*`)(fâng-)(ri*`)(xi:a`)","nghia":"thế phong nhật hạ (thành ngữ: phong tục ngày một đi xuống)"},{"hanzi":"唯利是圖","audio":"[(wei2)(li4)(shi4)(tu2)]","pinyin":"wéi lì shì tú","yueyin":"(guấy)(li`)(shi*`)(thú)","nghia":"duy lợi thị đồ (thành ngữ: chỉ nhắm vào lợi ích mà mưu cầu)"}]
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