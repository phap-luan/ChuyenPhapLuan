/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-017",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-017)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(yin1)(wei4)]</td><td id=\"m_audio_1\">[(ta1)]</td><td id=\"m_audio_2\">[(qian1)(che3)(dao4)]</td><td id=\"m_audio_3\">[(yao4)]</td><td id=\"m_audio_4\">[(dong4)]</td><td id=\"m_audio_5\">[(xu3)(duo1)]</td><td id=\"m_audio_6\">[(gong1)(pai4)]</td><td id=\"m_audio_7\">[(de)]</td><td id=\"m_audio_8\">[(dong1)(xi)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(yin- guây`)</td><td id=\"m_yueyin_1\">(tha-)</td><td id=\"m_yueyin_2\">(ch'i:en- tr'ửa tao`)</td><td id=\"m_yueyin_3\">(yao`)</td><td id=\"m_yueyin_4\">(tung`)</td><td id=\"m_yueyin_5\">(xủy tua-)</td><td id=\"m_yueyin_6\">(cung- p'ai`)</td><td id=\"m_yueyin_7\">(tơ)</td><td id=\"m_yueyin_8\">(tung- xi)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">因為</td><td id=\"m_hanzi_1\">它</td><td id=\"m_hanzi_2\">牽扯到</td><td id=\"m_hanzi_3\">要</td><td id=\"m_hanzi_4\">動</td><td id=\"m_hanzi_5\">許多</td><td id=\"m_hanzi_6\">功派</td><td id=\"m_hanzi_7\"><font color=\"#f97316\">的</font></td><td id=\"m_hanzi_8\">東西</td><td id=\"m_hanzi_9\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">yīnwèi</td><td id=\"m_pinyin_1\">tā</td><td id=\"m_pinyin_2\">qiānchědào</td><td id=\"m_pinyin_3\">yào</td><td id=\"m_pinyin_4\">dòng</td><td id=\"m_pinyin_5\">xǔduō</td><td id=\"m_pinyin_6\">gōngpài</td><td id=\"m_pinyin_7\">de</td><td id=\"m_pinyin_8\">dōngxi</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">bởi vì</td><td id=\"m_nghia_1\">nó</td><td id=\"m_nghia_2\">liên quan đến</td><td id=\"m_nghia_3\">phải</td><td id=\"m_nghia_4\">động</td><td id=\"m_nghia_5\">rất nhiều</td><td id=\"m_nghia_6\">công phái</td><td id=\"m_nghia_7\">&nbsp;về</td><td id=\"m_nghia_8\">nội dung</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">bởi vì nó dính líu đến </font><font style=\"\" color=\"#64748b\"><i style=\"\">(việc)</i></font><font color=\"#000000\" style=\"font-weight: bold;\"> phải động </font><i style=\"\"><font color=\"#64748b\" style=\"\">(chạm)</font></i><font color=\"#000000\" style=\"font-weight: bold;\"> rất nhiều công phái </font><font style=\"font-weight: bold;\" color=\"#f97316\">về</font><font color=\"#000000\" style=\"font-weight: bold;\"> nội dung.</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">bởi vì nó phải động đến những điều của rất nhiều công phái.</span></p>\n      </div>",
    tableData: [{"hanzi":"因為","audio":"[(yin1)(wei4)]","pinyin":"yīnwèi","yueyin":"(yin- guây`)","nghia":"bởi vì"},{"hanzi":"它","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"nó"},{"hanzi":"牽扯到","audio":"[(qian1)(che3)(dao4)]","pinyin":"qiānchědào","yueyin":"(ch'i:en- tr'ửa tao`)","nghia":"dính đến, liên quan đến (到 là bổ ngữ kết quả)"},{"hanzi":"要","audio":"[(yao4)]","pinyin":"yào","yueyin":"(yao`)","nghia":"phải, cần"},{"hanzi":"動","audio":"[(dong4)]","pinyin":"dòng","yueyin":"(tung`)","nghia":"động đến, chạm đến"},{"hanzi":"許多","audio":"[(xu3)(duo1)]","pinyin":"xǔduō","yueyin":"(xủy tua-)","nghia":"rất nhiều"},{"hanzi":"功派","audio":"[(gong1)(pai4)]","pinyin":"gōngpài","yueyin":"(cung- p'ai`)","nghia":"công phái, môn phái công pháp"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"東西","audio":"[(dong1)(xi)]","pinyin":"dōngxi","yueyin":"(tung- xi)","nghia":"thứ, nội dung"}]
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