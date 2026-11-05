/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-006.mp3)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\"></td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\"></td><td id=\"m_audio_6\"></td><td id=\"m_audio_7\"></td><td id=\"m_audio_8\"></td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\"></td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\"></td><td id=\"m_yueyin_6\"></td><td id=\"m_yueyin_7\"></td><td id=\"m_yueyin_8\"></td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他們</td><td id=\"m_hanzi_1\"><font color=\"#3b82f6\">所</font>講</td><td id=\"m_hanzi_2\">的</td><td id=\"m_hanzi_3\">東西</td><td id=\"m_hanzi_4\">都是</td><td id=\"m_hanzi_5\">屬於</td><td id=\"m_hanzi_6\">祛病健身</td><td id=\"m_hanzi_7\"><font color=\"#22c55e\">那一層次</font></td><td id=\"m_hanzi_8\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_9\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tāmen</td><td id=\"m_pinyin_1\">suǒ jiǎng</td><td id=\"m_pinyin_2\">de</td><td id=\"m_pinyin_3\">dōngxi</td><td id=\"m_pinyin_4\">dōu shì</td><td id=\"m_pinyin_5\">shǔyú</td><td id=\"m_pinyin_6\">qū bìng jiàn shēn</td><td id=\"m_pinyin_7\">nà yī céngcì</td><td id=\"m_pinyin_8\">de</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">họ</td><td id=\"m_nghia_1\">sở giảng</td><td id=\"m_nghia_2\">về</td><td id=\"m_nghia_3\">nội dung</td><td id=\"m_nghia_4\">đều là</td><td id=\"m_nghia_5\">thuộc về</td><td id=\"m_nghia_6\">trừ bệnh, khỏe người</td><td id=\"m_nghia_7\">một tầng thứ đó</td><td id=\"m_nghia_8\">nhấn mạnh</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">họ </b><font color=\"#3b82f6\"><b style=\"\">s</b><b style=\"\">ở</b></font><b style=\"color: rgb(0, 0, 0);\"> giảng về nội dung đều là thuộc về trừ bệnh khỏe người </b><b style=\"\"><font color=\"#22c55e\">một tầng thứ đó</font></b><b style=\"color: rgb(0, 0, 0);\"> </b><i style=\"\"><font color=\"#3b82f6\">nhấn mạnh .</font></i></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">những gì họ giảng đều thuộc về tầng chữa bệnh khoẻ người.</span></p>\n      </div>",
    tableData: [{"hanzi":"他們","audio":"[(ta1)(men)]","pinyin":"tāmen","yueyin":"(tha- mân)","nghia":"họ"},{"hanzi":"所講","audio":"[(suo3)(jiang3)]","pinyin":"suǒ jiǎng","yueyin":"(sủa)(chi:ảng)","nghia":"sở giảng (所 nhấn mạnh)"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ"},{"hanzi":"東西","audio":"[(dong1)(xi)]","pinyin":"dōngxi","yueyin":"(tung- xi)","nghia":"thứ, điều, nội dung"},{"hanzi":"都是","audio":"[(dou1)(shi4)]","pinyin":"dōu shì","yueyin":"(tâu-)(shi*`)","nghia":"đều là"},{"hanzi":"屬於","audio":"[(shu3)(yu2)]","pinyin":"shǔyú","yueyin":"(shủ úy)","nghia":"thuộc về"},{"hanzi":"祛病健身","audio":"[(qu1)(bing4)(jian4)(shen1)]","pinyin":"qū bìng jiàn shēn","yueyin":"(ch'uy-)(ping`)(chi:en`)(shân-)","nghia":"trừ bệnh, khỏe người"},{"hanzi":"那一層次","audio":"[(na4)(yi1)(ceng2)(ci4)]","pinyin":"nà yī céngcì","yueyin":"(na`)(y-)(s'ấng s'ư`)","nghia":"một tầng thứ đó"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"nhấn mạnh"}]
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