/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-010",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-010)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ni3)]</td><td id=\"m_audio_1\">[(jiu4)]</td><td id=\"m_audio_2\">[(dei3)]</td><td id=\"m_audio_3\">[(fang4)(qi4)]</td><td id=\"m_audio_4\">[(zhi2)(zhuo2)(xin1)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(nỉ)</td><td id=\"m_yueyin_1\">(chi:âu`)</td><td id=\"m_yueyin_2\">(tẩy)</td><td id=\"m_yueyin_3\">(fang` ch'i`)</td><td id=\"m_yueyin_4\">(trí* trúa)(xin-)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">你</td><td id=\"m_hanzi_1\">就</td><td id=\"m_hanzi_2\">得</td><td id=\"m_hanzi_3\">放棄</td><td id=\"m_hanzi_4\">執著心</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">nǐ</td><td id=\"m_pinyin_1\">jiù</td><td id=\"m_pinyin_2\">děi</td><td id=\"m_pinyin_3\">fàngqì</td><td id=\"m_pinyin_4\">zhízhuó xīn</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">bạn</td><td id=\"m_nghia_1\">sẽ</td><td id=\"m_nghia_2\">phải</td><td id=\"m_nghia_3\">vứt bỏ</td><td id=\"m_nghia_4\">chấp trước tâm</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>bạn sẽ phải vứt bỏ chấp trước tâm .</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">chư vị phải vứt bỏ các tâm chấp trước.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"sẽ"},{"hanzi":"得","audio":"[(dei3)]","pinyin":"děi","yueyin":"(tẩy)","nghia":"phải"},{"hanzi":"放棄","audio":"[(fang4)(qi4)]","pinyin":"fàngqì","yueyin":"(fang` ch'i`)","nghia":"từ bỏ, vứt bỏ"},{"hanzi":"執著心","audio":"[(zhi2)(zhuo2)(xin1)]","pinyin":"zhízhuó xīn","yueyin":"(trí* trúa)(xin-)","nghia":"chấp trước tâm"}]
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