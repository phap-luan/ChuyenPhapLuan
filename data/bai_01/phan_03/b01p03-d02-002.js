/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d02-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d02-002)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(fo2)(jiao4)(zhong1)(de)(fa3)]</td><td id=\"m_audio_1\">[(bu4)(neng2)(gai4)(kuo4)]</td><td id=\"m_audio_2\">[(zheng3)(ge4)(fo2)(fa3)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(ta1)(zhi3)(shi4)]</td><td id=\"m_audio_5\">[(fo2)(fa3)(zhong1)(de)]</td><td id=\"m_audio_6\">[(xiao3)(xiao3)(yi2)(bu4)(fen4)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(fúa chi:ao`)(trung-)(tơ)(fả)</td><td id=\"m_yueyin_1\">(pu`)(nấng)(cai` khua`)</td><td id=\"m_yueyin_2\">(trẩng cưa`)(fúa fả)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(tha-)(trỉ* shi*`)</td><td id=\"m_yueyin_5\">(fúa fả)(trung-)(tơ)</td><td id=\"m_yueyin_6\">(xi:ảo xi:ảo)(ý)(pu` fân`)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">佛教<font color=\"#3b82f6\">中</font>的法</td><td id=\"m_hanzi_1\">不能概括</td><td id=\"m_hanzi_2\">整個佛法</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">它只是</td><td id=\"m_hanzi_5\">佛法<font color=\"#3b82f6\">中</font><font color=\"#a855f7\">的</font></td><td id=\"m_hanzi_6\">小小一部份</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">fójiào zhōng de fǎ</td><td id=\"m_pinyin_1\">bù néng gàikuò</td><td id=\"m_pinyin_2\">zhěnggè fófǎ</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">tā zhǐshì</td><td id=\"m_pinyin_5\">fófǎ zhōng de</td><td id=\"m_pinyin_6\">xiǎoxiǎo yí bùfèn</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">trong Phật giáo về Pháp</td><td id=\"m_nghia_1\">không thể khái quát</td><td id=\"m_nghia_2\">toàn bộ Phật Pháp</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">nó chỉ là</td><td id=\"m_nghia_5\">trong Phật Pháp <font color=\"#a855f7\">về</font></td><td id=\"m_nghia_6\">nhỏ bé một bộ phận</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#3b82f6\">trong</font><font color=\"#000000\"> Phật giáo về Pháp không thể khái quát toàn bộ Phật Pháp, nó chỉ là </font><font color=\"#3b82f6\">trong</font><font color=\"#000000\"> Phật Pháp </font><font color=\"#a855f7\">về</font><font color=\"#000000\"> nhỏ bé một bộ phận.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Pháp trong Phật giáo không thể khái quát toàn bộ Phật Pháp, nó chỉ là bộ phận rất nhỏ của Phật Pháp.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"佛教中的法","audio":"[(fo2)(jiao4)(zhong1)(de)(fa3)]","pinyin":"fójiào zhōng de fǎ","yueyin":"(fúa chi:ao`)(trung-)(tơ)(fả)","nghia":"trong Phật giáo về Pháp"},{"hanzi":"不能概括","audio":"[(bu4)(neng2)(gai4)(kuo4)]","pinyin":"bù néng gàikuò","yueyin":"(pu`)(nấng)(cai` khua`)","nghia":"không thể khái quát"},{"hanzi":"整個佛法","audio":"[(zheng3)(ge4)(fo2)(fa3)]","pinyin":"zhěnggè fófǎ","yueyin":"(trẩng cưa`)(fúa fả)","nghia":"toàn bộ Phật Pháp"},{"hanzi":"它只是","audio":"[(ta1)(zhi3)(shi4)]","pinyin":"tā zhǐshì","yueyin":"(tha-)(trỉ* shi*`)","nghia":"nó chỉ là"},{"hanzi":"佛法中的","audio":"[(fo2)(fa3)(zhong1)(de)]","pinyin":"fófǎ zhōng de","yueyin":"(fúa fả)(trung-)(tơ)","nghia":"trong Phật Pháp về"},{"hanzi":"小小一部份","audio":"[(xiao3)(xiao3)(yi2)(bu4)(fen4)]","pinyin":"xiǎoxiǎo yí bùfèn","yueyin":"(xi:ảo xi:ảo)(ý)(pu` fân`)","nghia":"nhỏ bé một bộ phận"}]
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