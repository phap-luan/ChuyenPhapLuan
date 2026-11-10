/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-018",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-018)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(you2)(qi2)]</td><td id=\"m_audio_1\">[(wo3)(men)]</td><td id=\"m_audio_2\">[(jin1)(tian1)]</td><td id=\"m_audio_3\">[(zai4)]</td><td id=\"m_audio_4\">[(xue2)]</td><td id=\"m_audio_5\">[(gong1)]</td><td id=\"m_audio_6\">[(de)]</td><td id=\"m_audio_7\">[(ren2)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(yấu ch'í)</td><td id=\"m_yueyin_1\">(gủa mân)</td><td id=\"m_yueyin_2\">(chin- thi:en-)</td><td id=\"m_yueyin_3\">(zai`)</td><td id=\"m_yueyin_4\">(xuế)</td><td id=\"m_yueyin_5\">(cung-)</td><td id=\"m_yueyin_6\">(tơ)</td><td id=\"m_yueyin_7\">(rấn)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">尤其</td><td id=\"m_hanzi_1\">我們</td><td id=\"m_hanzi_2\">今天</td><td id=\"m_hanzi_3\">在</td><td id=\"m_hanzi_4\">學</td><td id=\"m_hanzi_5\">功</td><td id=\"m_hanzi_6\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_7\">人</td><td id=\"m_hanzi_8\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">yóuqí</td><td id=\"m_pinyin_1\">wǒmen</td><td id=\"m_pinyin_2\">jīntiān</td><td id=\"m_pinyin_3\">zài</td><td id=\"m_pinyin_4\">xué</td><td id=\"m_pinyin_5\">gōng</td><td id=\"m_pinyin_6\">de</td><td id=\"m_pinyin_7\">rén</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nhất là</td><td id=\"m_nghia_1\">chúng ta</td><td id=\"m_nghia_2\">hôm nay</td><td id=\"m_nghia_3\">đang</td><td id=\"m_nghia_4\">học</td><td id=\"m_nghia_5\">công</td><td id=\"m_nghia_6\">về</td><td id=\"m_nghia_7\">người</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">nhất là chúng ta hôm nay đang học công </b><b style=\"\"><font color=\"#3b82f6\">về</font></b><b style=\"color: rgb(0, 0, 0);\"> </b><i style=\"\"><font color=\"#64748b\">những</font></i><b style=\"color: rgb(0, 0, 0);\">&nbsp;người,&nbsp;</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Nhất là với những người học công tại đây hôm nay,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"尤其","audio":"[(you2)(qi2)]","pinyin":"yóuqí","yueyin":"(yấu ch'í)","nghia":"nhất là, đặc biệt là"},{"hanzi":"我們","audio":"[(wo3)(men)]","pinyin":"wǒmen","yueyin":"(gủa mân)","nghia":"chúng ta"},{"hanzi":"今天","audio":"[(jin1)(tian1)]","pinyin":"jīntiān","yueyin":"(chin- thi:en-)","nghia":"hôm nay"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"đang (phó từ tiến hành)"},{"hanzi":"學","audio":"[(xue2)]","pinyin":"xué","yueyin":"(xuế)","nghia":"học"},{"hanzi":"功","audio":"[(gong1)]","pinyin":"gōng","yueyin":"(cung-)","nghia":"công"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"人","audio":"[(ren2)]","pinyin":"rén","yueyin":"(rấn)","nghia":"người"}]
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