/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d07-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d07-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zheng3)(ge4)]</td><td id=\"m_audio_1\">[(de)]</td><td id=\"m_audio_2\">[(ren2)(lei4)]</td><td id=\"m_audio_3\">[(she4)(hui4)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(dou1)]</td><td id=\"m_audio_6\">[(shi4)]</td><td id=\"m_audio_7\">[(zai4)]</td><td id=\"m_audio_8\">[(yi2)(ge4)]</td><td id=\"m_audio_9\">[(ceng2)(ci4)]</td><td id=\"m_audio_10\">[(dang1)(zhong1)]</td><td id=\"m_audio_11\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trẩng cưa`)</td><td id=\"m_yueyin_1\">(tơ)</td><td id=\"m_yueyin_2\">(rấn lây`)</td><td id=\"m_yueyin_3\">(shưa` huây`)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(tâu-)</td><td id=\"m_yueyin_6\">(shi*`)</td><td id=\"m_yueyin_7\">(zai`)</td><td id=\"m_yueyin_8\">(ý)(cưa`)</td><td id=\"m_yueyin_9\">(s'ấng s'ư`)</td><td id=\"m_yueyin_10\">(tang- trung-)</td><td id=\"m_yueyin_11\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">整個</td><td id=\"m_hanzi_1\">的</td><td id=\"m_hanzi_2\">人類</td><td id=\"m_hanzi_3\">社會</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">都</td><td id=\"m_hanzi_6\">是</td><td id=\"m_hanzi_7\">在</td><td id=\"m_hanzi_8\">一個</td><td id=\"m_hanzi_9\">層次</td><td id=\"m_hanzi_10\">當中</td><td id=\"m_hanzi_11\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhěnggè</td><td id=\"m_pinyin_1\">de</td><td id=\"m_pinyin_2\">rénlèi</td><td id=\"m_pinyin_3\">shèhuì</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">dōu</td><td id=\"m_pinyin_6\">shì</td><td id=\"m_pinyin_7\">zài</td><td id=\"m_pinyin_8\">yí gè</td><td id=\"m_pinyin_9\">céngcì</td><td id=\"m_pinyin_10\">dāngzhōng</td><td id=\"m_pinyin_11\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">toàn bộ</td><td id=\"m_nghia_1\">về</td><td id=\"m_nghia_2\">nhân loại</td><td id=\"m_nghia_3\">xã hội</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">đều</td><td id=\"m_nghia_6\">là</td><td id=\"m_nghia_7\">ở</td><td id=\"m_nghia_8\">một</td><td id=\"m_nghia_9\">tầng thứ</td><td id=\"m_nghia_10\">chính giữa</td><td id=\"m_nghia_11\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>toàn bộ về nhân loại xã hội, đều là ở một tầng thứ chính giữa,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Toàn thể xã hội nhân loại đều cùng trong một tầng này.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"整個","audio":"[(zheng3)(ge4)]","pinyin":"zhěnggè","yueyin":"(trẩng cưa`)","nghia":"toàn bộ, cả"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"人類","audio":"[(ren2)(lei4)]","pinyin":"rénlèi","yueyin":"(rấn lây`)","nghia":"nhân loại, loài người"},{"hanzi":"社會","audio":"[(she4)(hui4)]","pinyin":"shèhuì","yueyin":"(shưa` huây`)","nghia":"xã hội"},{"hanzi":"都","audio":"[(dou1)]","pinyin":"dōu","yueyin":"(tâu-)","nghia":"đều"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"ở, trong"},{"hanzi":"一個","audio":"[(yi2)(ge4)]","pinyin":"yí gè","yueyin":"(ý)(cưa`)","nghia":"một (tầng)"},{"hanzi":"層次","audio":"[(ceng2)(ci4)]","pinyin":"céngcì","yueyin":"(s'ấng s'ư`)","nghia":"tầng thứ"},{"hanzi":"當中","audio":"[(dang1)(zhong1)]","pinyin":"dāngzhōng","yueyin":"(tang- trung-)","nghia":"ở giữa, chính giữa"}]
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