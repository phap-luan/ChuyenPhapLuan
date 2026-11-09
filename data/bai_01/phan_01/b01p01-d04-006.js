/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d04-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d04-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(men)]</td><td id=\"m_audio_1\">[(shen2)(me)]</td><td id=\"m_audio_2\">[(dou1)]</td><td id=\"m_audio_3\">[(zuo4)(bu4)(liao3)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(dui4)]</td><td id=\"m_audio_6\">[(ni3)]</td><td id=\"m_audio_7\">[(wu2)(neng2)(wei2)(li4)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa mân)</td><td id=\"m_yueyin_1\">(shấn mơ)</td><td id=\"m_yueyin_2\">(tâu-)</td><td id=\"m_yueyin_3\">(zua`)(pu`)(li:ảo)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(tuây`)</td><td id=\"m_yueyin_6\">(nỉ)</td><td id=\"m_yueyin_7\">(ú nấng guấy li`)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我們</td><td id=\"m_hanzi_1\">甚麼</td><td id=\"m_hanzi_2\">都</td><td id=\"m_hanzi_3\">做不了</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">對</td><td id=\"m_hanzi_6\">你</td><td id=\"m_hanzi_7\">無能為力</td><td id=\"m_hanzi_8\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒmen</td><td id=\"m_pinyin_1\">shénme</td><td id=\"m_pinyin_2\">dōu</td><td id=\"m_pinyin_3\">zuò bù liǎo</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">duì</td><td id=\"m_pinyin_6\">nǐ</td><td id=\"m_pinyin_7\">wúnéngwéilì</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chúng tôi</td><td id=\"m_nghia_1\">cái gì</td><td id=\"m_nghia_2\">đều</td><td id=\"m_nghia_3\">làm không nổi</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">đối với</td><td id=\"m_nghia_6\">bạn</td><td id=\"m_nghia_7\">Vô năng vi lực</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>chúng tôi cái gì đều làm không nổi, đối với bạn Vô năng vi lực.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">[thì] chúng tôi chẳng thể làm gì, đối với chư vị chẳng thể giúp được.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我們","audio":"[(wo3)(men)]","pinyin":"wǒmen","yueyin":"(gủa mân)","nghia":"chúng tôi"},{"hanzi":"甚麼","audio":"[(shen2)(me)]","pinyin":"shénme","yueyin":"(shấn mơ)","nghia":"cái gì"},{"hanzi":"都","audio":"[(dou1)]","pinyin":"dōu","yueyin":"(tâu-)","nghia":"đều"},{"hanzi":"做不了","audio":"[(zuo4)(bu4)(liao3)]","pinyin":"zuò bù liǎo","yueyin":"(zua`)(pu`)(li:ảo)","nghia":"làm không nổi"},{"hanzi":"對","audio":"[(dui4)]","pinyin":"duì","yueyin":"(tuây`)","nghia":"đối với"},{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"無能為力","audio":"[(wu2)(neng2)(wei2)(li4)]","pinyin":"wúnéngwéilì","yueyin":"(ú nấng guấy li`)","nghia":"Vô năng vi lực: bất lực, không làm được gì (thành ngữ)"}]
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