/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-022",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-022.mp3)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ren2)(jia1)]</td><td id=\"m_audio_1\">[(yi4)(tiao2)]</td><td id=\"m_audio_2\">[(da4)(dao4)]</td><td id=\"m_audio_3\">[(wang3)]</td><td id=\"m_audio_4\">[(shang4)]</td><td id=\"m_audio_5\">[(xiu1)]</td><td id=\"m_audio_6\"></td><td id=\"m_audio_7\">[(ta1)]</td><td id=\"m_audio_8\">[(dou1)(shi4)]</td><td id=\"m_audio_9\">[(xie1)]</td><td id=\"m_audio_10\">[(cha4)(dao4)]</td><td id=\"m_audio_11\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(rấn chi:a-)</td><td id=\"m_yueyin_1\">(y`)(thi:áo)</td><td id=\"m_yueyin_2\">(ta` tao`)</td><td id=\"m_yueyin_3\">(goảng)</td><td id=\"m_yueyin_4\">(shang`)</td><td id=\"m_yueyin_5\">(xi:âu-)</td><td id=\"m_yueyin_6\"></td><td id=\"m_yueyin_7\">(tha-)</td><td id=\"m_yueyin_8\">(tâu-)(shi*`)</td><td id=\"m_yueyin_9\">(xi:ê-)</td><td id=\"m_yueyin_10\">(tr'a` tao`)</td><td id=\"m_yueyin_11\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">人家</td><td id=\"m_hanzi_1\">一條</td><td id=\"m_hanzi_2\">大道</td><td id=\"m_hanzi_3\">往</td><td id=\"m_hanzi_4\">上</td><td id=\"m_hanzi_5\">修</td><td id=\"m_hanzi_6\">,</td><td id=\"m_hanzi_7\">他</td><td id=\"m_hanzi_8\">都是</td><td id=\"m_hanzi_9\">些</td><td id=\"m_hanzi_10\">岔道</td><td id=\"m_hanzi_11\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">rénjiā</td><td id=\"m_pinyin_1\">yì tiáo</td><td id=\"m_pinyin_2\">dàdào</td><td id=\"m_pinyin_3\">wǎng</td><td id=\"m_pinyin_4\">shàng</td><td id=\"m_pinyin_5\">xiū</td><td id=\"m_pinyin_6\"></td><td id=\"m_pinyin_7\">tā</td><td id=\"m_pinyin_8\">dōu shì</td><td id=\"m_pinyin_9\">xiē</td><td id=\"m_pinyin_10\">chàdào</td><td id=\"m_pinyin_11\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">người ta</td><td id=\"m_nghia_1\">một đường</td><td id=\"m_nghia_2\">đại đạo</td><td id=\"m_nghia_3\">hướng</td><td id=\"m_nghia_4\">lên trên</td><td id=\"m_nghia_5\">tu</td><td id=\"m_nghia_6\"></td><td id=\"m_nghia_7\">anh ta</td><td id=\"m_nghia_8\">đều là</td><td id=\"m_nghia_9\">những</td><td id=\"m_nghia_10\">đường nhánh</td><td id=\"m_nghia_11\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>người ta một đường đại đạo hướng lên trên tu,&nbsp; anh ta đều là những đường nhánh,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Người ta theo một con đường lớn [đại đạo] mà tu lên, [còn] họ [theo] các đường nhánh,</span></p>\n      </div>",
    tableData: [{"hanzi":"人家","audio":"[(ren2)(jia1)]","pinyin":"rénjiā","yueyin":"(rấn chi:a-)","nghia":"người ta, người khác (đối lập với \"anh ta\")"},{"hanzi":"一條","audio":"[(yi4)(tiao2)]","pinyin":"yì tiáo","yueyin":"(y`)(thi:áo)","nghia":"một con/một đường (條: lượng từ vật dài)"},{"hanzi":"大道","audio":"[(da4)(dao4)]","pinyin":"dàdào","yueyin":"(ta` tao`)","nghia":"đại đạo, con đường lớn"},{"hanzi":"往","audio":"[(wang3)]","pinyin":"wǎng","yueyin":"(goảng)","nghia":"hướng"},{"hanzi":"上","audio":"[(shang4)]","pinyin":"shàng","yueyin":"(shang`)","nghia":"lên trên"},{"hanzi":"修","audio":"[(xiu1)]","pinyin":"xiū","yueyin":"(xi:âu-)","nghia":"tu, tu luyện"},{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"anh ta"},{"hanzi":"都是","audio":"[(dou1)(shi4)]","pinyin":"dōu shì","yueyin":"(tâu-)(shi*`)","nghia":"đều là"},{"hanzi":"些","audio":"[(xie1)]","pinyin":"xiē","yueyin":"(xi:ê-)","nghia":"một số, những (lượng từ không xác định)"},{"hanzi":"岔道","audio":"[(cha4)(dao4)]","pinyin":"chàdào","yueyin":"(tr'a` tao`)","nghia":"đường rẽ, ngã rẽ, đường nhánh"}]
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