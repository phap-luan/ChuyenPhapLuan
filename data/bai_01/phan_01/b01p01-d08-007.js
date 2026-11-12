/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d08-007",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d08-007)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(dan4)(shi4)]</td><td id=\"m_audio_1\">[(dai4)(zhe)]</td><td id=\"m_audio_2\">[(yi2)(ge4)(you3)(bing4)(de)(shen1)(ti3)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(huo4)]</td><td id=\"m_audio_5\">[(you3)(xie1)(ren2)]</td><td id=\"m_audio_6\">[(shen1)(shang4)]</td><td id=\"m_audio_7\">[(xin4)(xi1)]</td><td id=\"m_audio_8\">[(hai2)(hen3)(luan4)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tan` shi*`)</td><td id=\"m_yueyin_1\">(tai` trơ)</td><td id=\"m_yueyin_2\">(ý)(cưa`)(yẩu)(ping`)(tơ)(shân- thỉ)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(hua`)</td><td id=\"m_yueyin_5\">(yẩu xi:ê-)(rấn)</td><td id=\"m_yueyin_6\">(shân- shang`)</td><td id=\"m_yueyin_7\">(xin` xi-)</td><td id=\"m_yueyin_8\">(hái)(hẩn)(loan`)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">但是</td><td id=\"m_hanzi_1\">帶著</td><td id=\"m_hanzi_2\">一個有病<font color=\"#f97316\">的</font>身體</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">或</td><td id=\"m_hanzi_5\">有些人</td><td id=\"m_hanzi_6\">身上</td><td id=\"m_hanzi_7\">信息</td><td id=\"m_hanzi_8\">還很亂</td><td id=\"m_hanzi_9\">，</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dànshì</td><td id=\"m_pinyin_1\">dàizhe</td><td id=\"m_pinyin_2\">yí gè yǒu bìng de shēntǐ</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">huò</td><td id=\"m_pinyin_5\">yǒuxiē rén</td><td id=\"m_pinyin_6\">shēnshàng</td><td id=\"m_pinyin_7\">xìnxī</td><td id=\"m_pinyin_8\">hái hěn luàn</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">nhưng</td><td id=\"m_nghia_1\">mang theo</td><td id=\"m_nghia_2\">một cái có bệnh về thân thể</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">hoặc</td><td id=\"m_nghia_5\">có vài người</td><td id=\"m_nghia_6\">trên thân</td><td id=\"m_nghia_7\">tín tức</td><td id=\"m_nghia_8\">còn rất loạn</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">nhưng mang theo một cái có bệnh </font><font color=\"#f97316\">về</font><font color=\"#000000\"> thân thể, hoặc có vài người trên thân tín tức còn rất loạn.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Nhưng mang một thân thể có bệnh, hoặc có người mang trên thân những tín tức còn rất loạn;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"但是","audio":"[(dan4)(shi4)]","pinyin":"dànshì","yueyin":"(tan` shi*`)","nghia":"nhưng"},{"hanzi":"帶著","audio":"[(dai4)(zhe)]","pinyin":"dàizhe","yueyin":"(tai` trơ)","nghia":"mang theo"},{"hanzi":"一個有病的身體","audio":"[(yi2)(ge4)(you3)(bing4)(de)(shen1)(ti3)]","pinyin":"yí gè yǒu bìng de shēntǐ","yueyin":"(ý)(cưa`)(yẩu)(ping`)(tơ)(shân- thỉ)","nghia":"một cái có bệnh về thân thể"},{"hanzi":"或","audio":"[(huo4)]","pinyin":"huò","yueyin":"(hua`)","nghia":"hoặc"},{"hanzi":"有些人","audio":"[(you3)(xie1)(ren2)]","pinyin":"yǒuxiē rén","yueyin":"(yẩu xi:ê-)(rấn)","nghia":"có vài người"},{"hanzi":"身上","audio":"[(shen1)(shang4)]","pinyin":"shēnshàng","yueyin":"(shân- shang`)","nghia":"trên thân"},{"hanzi":"信息","audio":"[(xin4)(xi1)]","pinyin":"xìnxī","yueyin":"(xin` xi-)","nghia":"tín tức"},{"hanzi":"還很亂","audio":"[(hai2)(hen3)(luan4)]","pinyin":"hái hěn luàn","yueyin":"(hái)(hẩn)(loan`)","nghia":"còn rất loạn"}]
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