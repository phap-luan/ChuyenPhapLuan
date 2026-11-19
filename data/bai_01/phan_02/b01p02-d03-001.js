/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(hai2)(yao4)]</td><td id=\"m_audio_1\">[(qiang2)(diao4)]</td><td id=\"m_audio_2\">[(yi2)(ge4)(wen4)(ti2)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(wo3)(men)(xiu1)(lian4)]</td><td id=\"m_audio_5\"></td><td id=\"m_audio_6\">[(shi4)(yao4)]</td><td id=\"m_audio_7\">[(chuan2)(gong1)(jiang2)(fa3)(de)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)(hái)(yao`)</td><td id=\"m_yueyin_1\">(ch'i:áng ti:ao`)</td><td id=\"m_yueyin_2\">(ý)(cưa`)(guân` thí)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(gủa mân)(xi:âu- li:en`)</td><td id=\"m_yueyin_5\"></td><td id=\"m_yueyin_6\">(shi*`)(yao`)</td><td id=\"m_yueyin_7\">(tr'oán)(cung-)(chi:áng fả)(tơ)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我還要</td><td id=\"m_hanzi_1\">強調</td><td id=\"m_hanzi_2\">一個問題</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">我們修煉</td><td id=\"m_hanzi_5\">,</td><td id=\"m_hanzi_6\">是要</td><td id=\"m_hanzi_7\">傳功講法<font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_8\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ hái yào</td><td id=\"m_pinyin_1\">qiángdiào</td><td id=\"m_pinyin_2\">yí gè wèntí</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">wǒmen xiūliàn</td><td id=\"m_pinyin_5\"></td><td id=\"m_pinyin_6\">shì yào</td><td id=\"m_pinyin_7\">chuángōng jiǎngfǎ de</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi còn muốn</td><td id=\"m_nghia_1\">nhấn mạnh</td><td id=\"m_nghia_2\">một vấn đề</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">chúng ta tu luyện</td><td id=\"m_nghia_5\"></td><td id=\"m_nghia_6\">là phải</td><td id=\"m_nghia_7\">truyền công giảng Pháp (de)</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">tôi còn muốn nhấn mạnh một vấn đề, chúng ta tu luyện, là phải truyền công giảng Pháp </font><font color=\"#3b82f6\" style=\"\"><i>(de)</i></font><font color=\"#000000\" style=\"font-weight: bold;\">.</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tôi cũng cần phải nhấn mạnh một vấn đề, tu luyện chúng ta cần phải có truyền công [và] giảng Pháp.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我還要","audio":"[(wo3)(hai2)(yao4)]","pinyin":"wǒ hái yào","yueyin":"(gủa)(hái)(yao`)","nghia":"tôi còn muốn"},{"hanzi":"強調","audio":"[(qiang2)(diao4)]","pinyin":"qiángdiào","yueyin":"(ch'i:áng ti:ao`)","nghia":"nhấn mạnh"},{"hanzi":"一個問題","audio":"[(yi2)(ge4)(wen4)(ti2)]","pinyin":"yí gè wèntí","yueyin":"(ý)(cưa`)(guân` thí)","nghia":"một vấn đề"},{"hanzi":"我們修煉","audio":"[(wo3)(men)(xiu1)(lian4)]","pinyin":"wǒmen xiūliàn","yueyin":"(gủa mân)(xi:âu- li:en`)","nghia":"chúng ta tu luyện"},{"hanzi":"是要","audio":"[(shi4)(yao4)]","pinyin":"shì yào","yueyin":"(shi*`)(yao`)","nghia":"là phải"},{"hanzi":"傳功講法的","audio":"[(chuan2)(gong1)(jiang2)(fa3)(de)]","pinyin":"chuángōng jiǎngfǎ de","yueyin":"(tr'oán)(cung-)(chi:áng fả)(tơ)","nghia":"truyền công giảng Pháp (de)"}]
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