/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-012",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-012)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(na4)]</td><td id=\"m_audio_1\">[(ni3)]</td><td id=\"m_audio_2\">[(shen2)(me)]</td><td id=\"m_audio_3\">[(dou1)]</td><td id=\"m_audio_4\">[(xue2)(bu)(dao4)]</td><td id=\"m_audio_5\">[(de)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(na`)</td><td id=\"m_yueyin_1\">(nỉ)</td><td id=\"m_yueyin_2\">(shấn mơ)</td><td id=\"m_yueyin_3\">(tâu-)</td><td id=\"m_yueyin_4\">(xuế)(pu)(tao`)</td><td id=\"m_yueyin_5\">(tơ)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">那</td><td id=\"m_hanzi_1\">你</td><td id=\"m_hanzi_2\">甚麼</td><td id=\"m_hanzi_3\">都</td><td id=\"m_hanzi_4\">學不到</td><td id=\"m_hanzi_5\">的</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">nà</td><td id=\"m_pinyin_1\">nǐ</td><td id=\"m_pinyin_2\">shénme</td><td id=\"m_pinyin_3\">dōu</td><td id=\"m_pinyin_4\">xué bu dào</td><td id=\"m_pinyin_5\">de</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">vậy thì</td><td id=\"m_nghia_1\">bạn</td><td id=\"m_nghia_2\">cái gì</td><td id=\"m_nghia_3\">đều</td><td id=\"m_nghia_4\">không học được</td><td id=\"m_nghia_5\"><font color=\"#3b82f6\">đâu</font></td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">vậy thì bạn cái gì </b><font color=\"#64748b\"><i>(cũng)</i></font><b style=\"color: rgb(0, 0, 0);\"> đều không học được </b><font color=\"#3b82f6\" style=\"font-weight: bold;\">đâu</font><font color=\"#000000\" style=\"font-weight: bold;\">.</font><font color=\"#3b82f6\" style=\"font-weight: bold;\">&nbsp;</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">[thì] chư vị sẽ không học được gì hết.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"那","audio":"[(na4)]","pinyin":"nà","yueyin":"(na`)","nghia":"vậy, vậy thì"},{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"甚麼","audio":"[(shen2)(me)]","pinyin":"shénme","yueyin":"(shấn mơ)","nghia":"cái gì"},{"hanzi":"都","audio":"[(dou1)]","pinyin":"dōu","yueyin":"(tâu-)","nghia":"đều"},{"hanzi":"學不到","audio":"[(xue2)(bu)(dao4)]","pinyin":"xué bu dào","yueyin":"(xuế)(pu)(tao`)","nghia":"không học được"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"nhấn mạnh: trợ từ ngữ khí khẳng định"}]
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