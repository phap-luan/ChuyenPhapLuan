/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-007",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-007)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dui4)]</td><td id=\"m_audio_1\">[(xue2)(yuan2)]</td><td id=\"m_audio_2\">[(de)]</td><td id=\"m_audio_3\">[(xin1)(xing4)]</td><td id=\"m_audio_4\">[(yao1)(qiu2)]</td><td id=\"m_audio_5\">[(ye3)]</td><td id=\"m_audio_6\">[(jiu4)]</td><td id=\"m_audio_7\">[(yao4)]</td><td id=\"m_audio_8\">[(gao1)]</td><td id=\"m_audio_9\">[(le)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tuây`)</td><td id=\"m_yueyin_1\">(xuế doán)</td><td id=\"m_yueyin_2\">(tơ)</td><td id=\"m_yueyin_3\">(xin- xing`)</td><td id=\"m_yueyin_4\">(yao- ch'i:ấu)</td><td id=\"m_yueyin_5\">(yể)</td><td id=\"m_yueyin_6\">(chi:âu`)</td><td id=\"m_yueyin_7\">(yao`)</td><td id=\"m_yueyin_8\">(cao-)</td><td id=\"m_yueyin_9\">(lơ)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">對</td><td id=\"m_hanzi_1\">學員</td><td id=\"m_hanzi_2\">的</td><td id=\"m_hanzi_3\">心性</td><td id=\"m_hanzi_4\">要求</td><td id=\"m_hanzi_5\">也</td><td id=\"m_hanzi_6\">就</td><td id=\"m_hanzi_7\">要</td><td id=\"m_hanzi_8\">高</td><td id=\"m_hanzi_9\"><font color=\"#3b82f6\">了</font></td><td id=\"m_hanzi_10\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">duì</td><td id=\"m_pinyin_1\">xuéyuán</td><td id=\"m_pinyin_2\">de</td><td id=\"m_pinyin_3\">xīnxìng</td><td id=\"m_pinyin_4\">yāoqiú</td><td id=\"m_pinyin_5\">yě</td><td id=\"m_pinyin_6\">jiù</td><td id=\"m_pinyin_7\">yào</td><td id=\"m_pinyin_8\">gāo</td><td id=\"m_pinyin_9\">le</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đối với</td><td id=\"m_nghia_1\">học viên</td><td id=\"m_nghia_2\">về</td><td id=\"m_nghia_3\">tâm tính</td><td id=\"m_nghia_4\">yêu cầu</td><td id=\"m_nghia_5\">cũng</td><td id=\"m_nghia_6\">sẽ</td><td id=\"m_nghia_7\">phải</td><td id=\"m_nghia_8\">cao</td><td id=\"m_nghia_9\">nhấn mạnh</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">đối với học viên về tâm tính yêu cầu cũng sẽ phải cao </b><font color=\"#3b82f6\"><i>nhấn mạnh</i></font><b style=\"color: rgb(0, 0, 0);\">.</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">đối với tâm tính của học viên thì yêu cầu cũng nhất định phải cao.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"對","audio":"[(dui4)]","pinyin":"duì","yueyin":"(tuây`)","nghia":"đối với"},{"hanzi":"學員","audio":"[(xue2)(yuan2)]","pinyin":"xuéyuán","yueyin":"(xuế doán)","nghia":"học viên"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"心性","audio":"[(xin1)(xing4)]","pinyin":"xīnxìng","yueyin":"(xin- xing`)","nghia":"tâm tính"},{"hanzi":"要求","audio":"[(yao1)(qiu2)]","pinyin":"yāoqiú","yueyin":"(yao- ch'i:ấu)","nghia":"yêu cầu"},{"hanzi":"也","audio":"[(ye3)]","pinyin":"yě","yueyin":"(yể)","nghia":"cũng"},{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"sẽ"},{"hanzi":"要","audio":"[(yao4)]","pinyin":"yào","yueyin":"(yao`)","nghia":"cần, phải"},{"hanzi":"高","audio":"[(gao1)]","pinyin":"gāo","yueyin":"(cao-)","nghia":"cao"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"nhấn mạnh: trợ từ ngữ khí"}]
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