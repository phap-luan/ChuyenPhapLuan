/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d08-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d08-002)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(shei2)]</td><td id=\"m_audio_1\">[(kan4)(jian4)(le)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(dou1)(yao4)]</td><td id=\"m_audio_4\">[(bang1)(ta1)]</td><td id=\"m_audio_5\"></td><td id=\"m_audio_6\">[(wu2)(tiao2)(jian4)(de)]</td><td id=\"m_audio_7\">[(bang1)(ta1)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(shấy)</td><td id=\"m_yueyin_1\">(khan` chi:en`)(lơ)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(tâu-)(yao`)</td><td id=\"m_yueyin_4\">(pang-)(tha-)</td><td id=\"m_yueyin_5\"></td><td id=\"m_yueyin_6\">(ú thi:áo chi:en`)(tơ)</td><td id=\"m_yueyin_7\">(pang-)(tha-)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">誰</td><td id=\"m_hanzi_1\">看見了</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">都要</td><td id=\"m_hanzi_4\">幫他</td><td id=\"m_hanzi_5\">,</td><td id=\"m_hanzi_6\">無條件<font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_7\">幫他</td><td id=\"m_hanzi_8\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">shéi</td><td id=\"m_pinyin_1\">kànjiàn le</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">dōu yào</td><td id=\"m_pinyin_4\">bāng tā</td><td id=\"m_pinyin_5\"></td><td id=\"m_pinyin_6\">wútiáojiàn de</td><td id=\"m_pinyin_7\">bāng tā</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">ai</td><td id=\"m_nghia_1\">nhìn thấy rồi</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">đều phải</td><td id=\"m_nghia_4\">giúp anh ta</td><td id=\"m_nghia_5\"></td><td id=\"m_nghia_6\">vô điều kiện mà</td><td id=\"m_nghia_7\">giúp anh ta</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">ai nhìn thấy rồi, đều phải giúp anh ta, vô điều kiện </font><font color=\"#3b82f6\">mà</font><font color=\"#000000\"> giúp anh ta.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Ai mà nhìn thấy, [thì] đều [muốn] giúp người kia, giúp một cách vô điều kiện.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"誰","audio":"[(shei2)]","pinyin":"shéi","yueyin":"(shấy)","nghia":"ai"},{"hanzi":"看見了","audio":"[(kan4)(jian4)(le)]","pinyin":"kànjiàn le","yueyin":"(khan` chi:en`)(lơ)","nghia":"nhìn thấy rồi"},{"hanzi":"都要","audio":"[(dou1)(yao4)]","pinyin":"dōu yào","yueyin":"(tâu-)(yao`)","nghia":"đều phải"},{"hanzi":"幫他","audio":"[(bang1)(ta1)]","pinyin":"bāng tā","yueyin":"(pang-)(tha-)","nghia":"giúp anh ta"},{"hanzi":"無條件的","audio":"[(wu2)(tiao2)(jian4)(de)]","pinyin":"wútiáojiàn de","yueyin":"(ú thi:áo chi:en`)(tơ)","nghia":"vô điều kiện mà"},{"hanzi":"幫他","audio":"[(bang1)(ta1)]","pinyin":"bāng tā","yueyin":"(pang-)(tha-)","nghia":"giúp anh ta"}]
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