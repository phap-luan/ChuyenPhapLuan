/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d01-004",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d01-004)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(jin1)(hou4)]</td><td id=\"m_audio_1\">[(wo3)(men)(suo2)(chan3)(shu4)(de)]</td><td id=\"m_audio_2\">[(dou1)(shi4)]</td><td id=\"m_audio_3\">[(gao1)(ceng2)(ci4)(zhong1)(de)(fa3)]</td><td id=\"m_audio_4\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(chin- hâu`)</td><td id=\"m_yueyin_1\">(gủa mân)(sủa)(tr'ản shu`)(tơ)</td><td id=\"m_yueyin_2\">(tâu-)(shi*`)</td><td id=\"m_yueyin_3\">(cao-)(s'ấng s'ư`)(trung-)(tơ)(fả)</td><td id=\"m_yueyin_4\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">今後</td><td id=\"m_hanzi_1\">我們<font color=\"#3b82f6\">所</font>闡述<font color=\"#ec4899\">的</font></td><td id=\"m_hanzi_2\">都是</td><td id=\"m_hanzi_3\">高層次<font color=\"#3b82f6\">中</font><font color=\"#f97316\">的</font>法</td><td id=\"m_hanzi_4\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">jīnhòu</td><td id=\"m_pinyin_1\">wǒmen suǒ chǎnshù de</td><td id=\"m_pinyin_2\">dōu shì</td><td id=\"m_pinyin_3\">gāo céngcì zhōng de fǎ</td><td id=\"m_pinyin_4\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nay sau</td><td id=\"m_nghia_1\">điều chúng tôi trình bày (de)</td><td id=\"m_nghia_2\">đều là</td><td id=\"m_nghia_3\">trong cao tầng thứ về Pháp</td><td id=\"m_nghia_4\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">nay sau </font><font color=\"#3b82f6\" style=\"font-weight: bold;\">điều</font><b style=\"color: rgb(0, 0, 0);\"> chúng tôi trình bày </b><i style=\"\"><font color=\"#ec4899\">(de) </font></i><b style=\"color: rgb(0, 0, 0);\">đều là </b><b style=\"\"><font color=\"#3b82f6\">trong</font></b><b style=\"color: rgb(0, 0, 0);\"> cao tầng thứ về Pháp.</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Từ nay trở đi, những gì chúng tôi nói rõ đều là Pháp tại cao tầng.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"今後","audio":"[(jin1)(hou4)]","pinyin":"jīnhòu","yueyin":"(chin- hâu`)","nghia":"nay sau: từ nay về sau"},{"hanzi":"我們所闡述的","audio":"[(wo3)(men)(suo2)(chan3)(shu4)(de)]","pinyin":"wǒmen suǒ chǎnshù de","yueyin":"(gủa mân)(sủa)(tr'ản shu`)(tơ)","nghia":"chúng tôi sở trình bày (de), điều chúng tôi trình bày (de)"},{"hanzi":"都是","audio":"[(dou1)(shi4)]","pinyin":"dōu shì","yueyin":"(tâu-)(shi*`)","nghia":"đều là"},{"hanzi":"高層次中的法","audio":"[(gao1)(ceng2)(ci4)(zhong1)(de)(fa3)]","pinyin":"gāo céngcì zhōng de fǎ","yueyin":"(cao-)(s'ấng s'ư`)(trung-)(tơ)(fả)","nghia":"trong cao tầng thứ về Pháp"}]
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