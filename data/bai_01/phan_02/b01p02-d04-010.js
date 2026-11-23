/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d04-010",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d04-010)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dan4)(shi4)]</td><td id=\"m_audio_1\">[(zhe4)(yi4)(ceng2)(ci4)(zhong1)(de)(fa3)]</td><td id=\"m_audio_2\">[(zai4)(zhe4)(yi4)(ceng2)(ci4)(zhong1)]</td><td id=\"m_audio_3\">[(shi4)(you3)]</td><td id=\"m_audio_4\">[(zhi3)(dao3)(zuo4)(yong4)]</td><td id=\"m_audio_5\">[(de)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tan` shi*`)</td><td id=\"m_yueyin_1\">(trưa`)(y`)(s'ấng s'ư`)(trung-)(tơ)(fả)</td><td id=\"m_yueyin_2\">(zai`)(trưa`)(y`)(s'ấng s'ư`)(trung-)</td><td id=\"m_yueyin_3\">(shi*`)(yẩu)</td><td id=\"m_yueyin_4\">(trỉ* tảo)(zua` yung`)</td><td id=\"m_yueyin_5\">(tơ)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">但是</td><td id=\"m_hanzi_1\"><font color=\"#a855f7\">這</font>一層次<font color=\"#f97316\">中</font>的法</td><td id=\"m_hanzi_2\"><font color=\"#3b82f6\">在</font>這一層次<font color=\"#3b82f6\">中</font></td><td id=\"m_hanzi_3\">是有</td><td id=\"m_hanzi_4\">指導作用</td><td id=\"m_hanzi_5\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dànshì</td><td id=\"m_pinyin_1\">zhè yì céngcì zhōng de fǎ</td><td id=\"m_pinyin_2\">zài zhè yì céngcì zhōng</td><td id=\"m_pinyin_3\">shì yǒu</td><td id=\"m_pinyin_4\">zhǐdǎo zuòyòng</td><td id=\"m_pinyin_5\">de</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nhưng</td><td id=\"m_nghia_1\"><font color=\"#f97316\">trong</font> một tầng thứ <font color=\"#a855f7\">này</font> về Pháp</td><td id=\"m_nghia_2\"><font color=\"#3b82f6\">ở trong</font> một tầng thứ</td><td id=\"m_nghia_3\">là có</td><td id=\"m_nghia_4\">chỉ đạo tác dụng</td><td id=\"m_nghia_5\">(de)</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"color: rgb(0, 0, 0);\">nhưng [</b><b style=\"\"><font color=\"#f97316\">trong</font></b><b style=\"color: rgb(0, 0, 0);\"> một tầng thứ </b><b style=\"\"><font color=\"#a855f7\">này</font></b><b style=\"color: rgb(0, 0, 0);\"> về Pháp] [</b><b style=\"\"><font color=\"#3b82f6\">ở trong</font></b><b style=\"color: rgb(0, 0, 0);\"> một tầng thứ] là có chỉ đạo tác dụng </b><i style=\"\"><font color=\"#3b82f6\">(de)</font></i><b style=\"color: rgb(0, 0, 0);\">.</b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">nhưng Pháp của mỗi một tầng có tác dụng [làm Pháp lý] chỉ đạo tại mỗi một tầng.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"但是","audio":"[(dan4)(shi4)]","pinyin":"dànshì","yueyin":"(tan` shi*`)","nghia":"nhưng"},{"hanzi":"這一層次中的法","audio":"[(zhe4)(yi4)(ceng2)(ci4)(zhong1)(de)(fa3)]","pinyin":"zhè yì céngcì zhōng de fǎ","yueyin":"(trưa`)(y`)(s'ấng s'ư`)(trung-)(tơ)(fả)","nghia":"trong một tầng thứ này về Pháp"},{"hanzi":"在這一層次中","audio":"[(zai4)(zhe4)(yi4)(ceng2)(ci4)(zhong1)]","pinyin":"zài zhè yì céngcì zhōng","yueyin":"(zai`)(trưa`)(y`)(s'ấng s'ư`)(trung-)","nghia":"ở trong một tầng thứ"},{"hanzi":"是有","audio":"[(shi4)(you3)]","pinyin":"shì yǒu","yueyin":"(shi*`)(yẩu)","nghia":"là có"},{"hanzi":"指導作用","audio":"[(zhi3)(dao3)(zuo4)(yong4)]","pinyin":"zhǐdǎo zuòyòng","yueyin":"(trỉ* tảo)(zua` yung`)","nghia":"chỉ đạo tác dụng"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ cuối câu 是…的"}]
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