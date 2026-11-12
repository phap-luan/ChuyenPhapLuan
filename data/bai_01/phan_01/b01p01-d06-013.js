/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-013",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-013)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ren2)]</td><td id=\"m_audio_1\">[(sheng1)(chu1)(lai2)]</td><td id=\"m_audio_2\">[(he2)]</td><td id=\"m_audio_3\">[(yu3)(zhou4)]</td><td id=\"m_audio_4\">[(shi4)]</td><td id=\"m_audio_5\">[(tong2)(xing4)]</td><td id=\"m_audio_6\">[(de)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(rấn)</td><td id=\"m_yueyin_1\">(shâng-)(tr'u- lái)</td><td id=\"m_yueyin_2\">(hứa)</td><td id=\"m_yueyin_3\">(ủy trâu`)</td><td id=\"m_yueyin_4\">(shi*`)</td><td id=\"m_yueyin_5\">(thúng xing`)</td><td id=\"m_yueyin_6\">(tơ)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">人</td><td id=\"m_hanzi_1\">生出來</td><td id=\"m_hanzi_2\">和</td><td id=\"m_hanzi_3\">宇宙</td><td id=\"m_hanzi_4\"><font color=\"#3b82f6\">是</font></td><td id=\"m_hanzi_5\">同性</td><td id=\"m_hanzi_6\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">rén</td><td id=\"m_pinyin_1\">shēng chūlái</td><td id=\"m_pinyin_2\">hé</td><td id=\"m_pinyin_3\">yǔzhòu</td><td id=\"m_pinyin_4\">shì</td><td id=\"m_pinyin_5\">tóngxìng</td><td id=\"m_pinyin_6\">de</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">con người</td><td id=\"m_nghia_1\">sinh ra</td><td id=\"m_nghia_2\">cùng</td><td id=\"m_nghia_3\">vũ trụ</td><td id=\"m_nghia_4\">là</td><td id=\"m_nghia_5\">đống tính</td><td id=\"m_nghia_6\">nhấn mạnh</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">con người sinh ra cùng vũ trụ </font><font style=\"font-weight: bold;\" color=\"#3b82f6\">là</font><font color=\"#000000\" style=\"font-weight: bold;\"> đống tính </font><font color=\"#3b82f6\" style=\"\"><i style=\"\">nhấn mạnh</i></font><font color=\"#000000\" style=\"font-weight: bold;\">.</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">con người sinh ra cùng với vũ trụ là đồng tính.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"人","audio":"[(ren2)]","pinyin":"rén","yueyin":"(rấn)","nghia":"con người"},{"hanzi":"生出來","audio":"[(sheng1)(chu1)(lai2)]","pinyin":"shēng chūlái","yueyin":"(shâng-)(tr'u- lái)","nghia":"sinh ra (來 nhấn mạnh)"},{"hanzi":"和","audio":"[(he2)]","pinyin":"hé","yueyin":"(hứa)","nghia":"cùng, với"},{"hanzi":"宇宙","audio":"[(yu3)(zhou4)]","pinyin":"yǔzhòu","yueyin":"(ủy trâu`)","nghia":"vũ trụ"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"同性","audio":"[(tong2)(xing4)]","pinyin":"tóngxìng","yueyin":"(thúng xing`)","nghia":"đống tính"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ cuối trong cấu trúc 是…的"}]
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