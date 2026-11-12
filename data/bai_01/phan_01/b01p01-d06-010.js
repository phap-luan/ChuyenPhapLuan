/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-010",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-010)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhe4)(xie1)]</td><td id=\"m_audio_1\">[(wu4)(zhi4)]</td><td id=\"m_audio_2\">[(zai4)]</td><td id=\"m_audio_3\">[(xiang1)(hu4)]</td><td id=\"m_audio_4\">[(yun4)(dong4)]</td><td id=\"m_audio_5\">[(xia4)]</td><td id=\"m_audio_6\">[(ke2)(yi3)]</td><td id=\"m_audio_7\">[(chan3)(sheng1)]</td><td id=\"m_audio_8\">[(sheng1)(ming4)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trưa` xi:ê-)</td><td id=\"m_yueyin_1\">(u` tri*`)</td><td id=\"m_yueyin_2\">(zai`)</td><td id=\"m_yueyin_3\">(xi:ang- hu`)</td><td id=\"m_yueyin_4\">(duyn` tung`)</td><td id=\"m_yueyin_5\">(xi:a`)</td><td id=\"m_yueyin_6\">(khứa ỷ)</td><td id=\"m_yueyin_7\">(tr'ản shâng-)</td><td id=\"m_yueyin_8\">(shâng- ming`)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">這些</td><td id=\"m_hanzi_1\">物質</td><td id=\"m_hanzi_2\"><font color=\"#3b82f6\">在</font></td><td id=\"m_hanzi_3\">相互</td><td id=\"m_hanzi_4\">運動</td><td id=\"m_hanzi_5\"><font color=\"#3b82f6\">下</font></td><td id=\"m_hanzi_6\">可以</td><td id=\"m_hanzi_7\">產生</td><td id=\"m_hanzi_8\">生命</td><td id=\"m_hanzi_9\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhèxiē</td><td id=\"m_pinyin_1\">wùzhì</td><td id=\"m_pinyin_2\">zài</td><td id=\"m_pinyin_3\">xiānghù</td><td id=\"m_pinyin_4\">yùndòng</td><td id=\"m_pinyin_5\">xià</td><td id=\"m_pinyin_6\">kěyǐ</td><td id=\"m_pinyin_7\">chǎnshēng</td><td id=\"m_pinyin_8\">shēngmìng</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">những này</td><td id=\"m_nghia_1\">vật chất</td><td id=\"m_nghia_2\">ở</td><td id=\"m_nghia_3\">tương hỗ</td><td id=\"m_nghia_4\">vận động</td><td id=\"m_nghia_5\">dưới</td><td id=\"m_nghia_6\">có thể</td><td id=\"m_nghia_7\">sản sinh</td><td id=\"m_nghia_8\">sinh mệnh</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">những này vật chất </font><font color=\"#3b82f6\">ở</font><font color=\"#000000\"> tương hỗ vận động </font><font color=\"#3b82f6\">dưới</font><font color=\"#000000\"> có thể sản sinh sinh mệnh,</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">với sự vận động tương hỗ, những vật chất ấy có thể sản sinh ra sinh mệnh;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"這些","audio":"[(zhe4)(xie1)]","pinyin":"zhèxiē","yueyin":"(trưa` xi:ê-)","nghia":"những... này"},{"hanzi":"物質","audio":"[(wu4)(zhi4)]","pinyin":"wùzhì","yueyin":"(u` tri*`)","nghia":"vật chất"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"ở (khung 在…下)"},{"hanzi":"相互","audio":"[(xiang1)(hu4)]","pinyin":"xiānghù","yueyin":"(xi:ang- hu`)","nghia":"tương hỗ: lẫn nhau, qua lại"},{"hanzi":"運動","audio":"[(yun4)(dong4)]","pinyin":"yùndòng","yueyin":"(duyn` tung`)","nghia":"vận động"},{"hanzi":"下","audio":"[(xia4)]","pinyin":"xià","yueyin":"(xi:a`)","nghia":"dưới (điều kiện, sự tác động)"},{"hanzi":"可以","audio":"[(ke2)(yi3)]","pinyin":"kěyǐ","yueyin":"(khứa ỷ)","nghia":"có thể"},{"hanzi":"產生","audio":"[(chan3)(sheng1)]","pinyin":"chǎnshēng","yueyin":"(tr'ản shâng-)","nghia":"sản sinh"},{"hanzi":"生命","audio":"[(sheng1)(ming4)]","pinyin":"shēngmìng","yueyin":"(shâng- ming`)","nghia":"sinh mệnh"}]
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