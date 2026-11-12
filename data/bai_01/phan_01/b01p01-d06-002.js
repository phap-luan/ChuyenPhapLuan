/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d06-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d06-002)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(yin1)(wei4)]</td><td id=\"m_audio_1\">[(xiu1)(lian4)(de)(ren2)]</td><td id=\"m_audio_2\">[(shi4)]</td><td id=\"m_audio_3\">[(zui4)]</td><td id=\"m_audio_4\">[(zhen1)(gui4)]</td><td id=\"m_audio_5\">[(de)]</td><td id=\"m_audio_6\"></td><td id=\"m_audio_7\">[(ta1)]</td><td id=\"m_audio_8\">[(xiang3)]</td><td id=\"m_audio_9\">[(xiu1)(lian4)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(yin- guây`)</td><td id=\"m_yueyin_1\">(xi:âu- li:en`)(tơ)(rấn)</td><td id=\"m_yueyin_2\">(shi*`)</td><td id=\"m_yueyin_3\">(zuây`)</td><td id=\"m_yueyin_4\">(trân-)(cuây`)</td><td id=\"m_yueyin_5\">(tơ)</td><td id=\"m_yueyin_6\"></td><td id=\"m_yueyin_7\">(tha-)</td><td id=\"m_yueyin_8\">(xi:ảng)</td><td id=\"m_yueyin_9\">(xi:âu- li:en`)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">因為</td><td id=\"m_hanzi_1\">修煉的人</td><td id=\"m_hanzi_2\">是</td><td id=\"m_hanzi_3\">最</td><td id=\"m_hanzi_4\">珍貴</td><td id=\"m_hanzi_5\">的</td><td id=\"m_hanzi_6\">,</td><td id=\"m_hanzi_7\">他</td><td id=\"m_hanzi_8\">想</td><td id=\"m_hanzi_9\">修煉</td><td id=\"m_hanzi_10\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">yīnwèi</td><td id=\"m_pinyin_1\">xiūliàn de rén</td><td id=\"m_pinyin_2\">shì</td><td id=\"m_pinyin_3\">zuì</td><td id=\"m_pinyin_4\">zhēnguì</td><td id=\"m_pinyin_5\">de</td><td id=\"m_pinyin_6\"></td><td id=\"m_pinyin_7\">tā</td><td id=\"m_pinyin_8\">xiǎng</td><td id=\"m_pinyin_9\">xiūliàn</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">bởi vì</td><td id=\"m_nghia_1\">người tu luyện</td><td id=\"m_nghia_2\">là</td><td id=\"m_nghia_3\">nhất</td><td id=\"m_nghia_4\">chân quý</td><td id=\"m_nghia_5\">nhấn mạnh</td><td id=\"m_nghia_6\"></td><td id=\"m_nghia_7\">anh ta</td><td id=\"m_nghia_8\">muốn</td><td id=\"m_nghia_9\">tu luyện</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\" style=\"font-weight: bold;\">bởi vì người tu luyện là nhất chân quý </font><font color=\"#3b82f6\" style=\"\"><i style=\"\">nhấn mạnh</i></font><font color=\"#000000\" style=\"font-weight: bold;\">, anh ta muốn tu luyện,&nbsp;</font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Bởi vì người tu luyện là trân quý nhất, [vì] người ấy muốn tu luyện;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"因為","audio":"[(yin1)(wei4)]","pinyin":"yīnwèi","yueyin":"(yin- guây`)","nghia":"bởi vì"},{"hanzi":"修煉的人","audio":"[(xiu1)(lian4)(de)(ren2)]","pinyin":"xiūliàn de rén","yueyin":"(xi:âu- li:en`)(tơ)(rấn)","nghia":"người tu luyện"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"最","audio":"[(zui4)]","pinyin":"zuì","yueyin":"(zuây`)","nghia":"nhất"},{"hanzi":"珍貴","audio":"[(zhen1)(gui4)]","pinyin":"zhēnguì","yueyin":"(trân-)(cuây`)","nghia":"chân quý, quý giá"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"nhấn mạnh: trợ từ cuối trong cấu trúc 是…的"},{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"anh ta"},{"hanzi":"想","audio":"[(xiang3)]","pinyin":"xiǎng","yueyin":"(xi:ảng)","nghia":"muốn"},{"hanzi":"修煉","audio":"[(xiu1)(lian4)]","pinyin":"xiūliàn","yueyin":"(xi:âu- li:en`)","nghia":"tu luyện"}]
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