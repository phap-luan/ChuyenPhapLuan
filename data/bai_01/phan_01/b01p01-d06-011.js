/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-011",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-011)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ye3)(jiu4)(shi4)(shuo1)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(ren2)]</td><td id=\"m_audio_3\">[(de)]</td><td id=\"m_audio_4\">[(zui4)(zao3)]</td><td id=\"m_audio_5\">[(sheng1)(ming4)]</td><td id=\"m_audio_6\">[(shi4)]</td><td id=\"m_audio_7\">[(lai2)(yuan2)(yu2)]</td><td id=\"m_audio_8\">[(yu3)(zhou4)(zhong1)]</td><td id=\"m_audio_9\">[(de)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(yể)(chi:âu`)(shi*`)(shua-)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(rấn)</td><td id=\"m_yueyin_3\">(tơ)</td><td id=\"m_yueyin_4\">(zuây`)(zảo)</td><td id=\"m_yueyin_5\">(shâng- ming`)</td><td id=\"m_yueyin_6\">(shi*`)</td><td id=\"m_yueyin_7\">(lái doán)(úy)</td><td id=\"m_yueyin_8\">(ủy trâu`)(trung-)</td><td id=\"m_yueyin_9\">(tơ)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">也就是說</td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">人</td><td id=\"m_hanzi_3\">的</td><td id=\"m_hanzi_4\">最早</td><td id=\"m_hanzi_5\">生命</td><td id=\"m_hanzi_6\">是</td><td id=\"m_hanzi_7\">來源於</td><td id=\"m_hanzi_8\">宇宙中</td><td id=\"m_hanzi_9\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_10\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">yě jiù shì shuō</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">rén</td><td id=\"m_pinyin_3\">de</td><td id=\"m_pinyin_4\">zuì zǎo</td><td id=\"m_pinyin_5\">shēngmìng</td><td id=\"m_pinyin_6\">shì</td><td id=\"m_pinyin_7\">láiyuán yú</td><td id=\"m_pinyin_8\">yǔzhòu zhōng</td><td id=\"m_pinyin_9\">de</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">cũng chính là nói</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">con người</td><td id=\"m_nghia_3\">về</td><td id=\"m_nghia_4\">sớm nhất</td><td id=\"m_nghia_5\">sinh mệnh</td><td id=\"m_nghia_6\">là</td><td id=\"m_nghia_7\">bắt nguồn từ</td><td id=\"m_nghia_8\">trong vũ trụ</td><td id=\"m_nghia_9\">nhấn mạnh</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">cũng chính là nói, con người về sớm nhất sinh mệnh là bắt nguồn từ trong vũ trụ </font><font color=\"#3b82f6\" style=\"\"><i style=\"\">nhấn mạnh</i></font><font color=\"#000000\" style=\"font-weight: bold;\">.&nbsp;</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">nên cũng nói, sinh mệnh tối nguyên sơ của con người đến từ vũ trụ.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"也就是說","audio":"[(ye3)(jiu4)(shi4)(shuo1)]","pinyin":"yě jiù shì shuō","yueyin":"(yể)(chi:âu`)(shi*`)(shua-)","nghia":"cũng chính là nói"},{"hanzi":"人","audio":"[(ren2)]","pinyin":"rén","yueyin":"(rấn)","nghia":"con người"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ sở hữu"},{"hanzi":"最早","audio":"[(zui4)(zao3)]","pinyin":"zuì zǎo","yueyin":"(zuây`)(zảo)","nghia":"sớm nhất, đầu tiên"},{"hanzi":"生命","audio":"[(sheng1)(ming4)]","pinyin":"shēngmìng","yueyin":"(shâng- ming`)","nghia":"sinh mệnh"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"來源於","audio":"[(lai2)(yuan2)(yu2)]","pinyin":"láiyuán yú","yueyin":"(lái doán)(úy)","nghia":"bắt nguồn từ"},{"hanzi":"宇宙中","audio":"[(yu3)(zhou4)(zhong1)]","pinyin":"yǔzhòu zhōng","yueyin":"(ủy trâu`)(trung-)","nghia":"trong vũ trụ"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ cuối trong cấu trúc 是…的"}]
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