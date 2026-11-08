/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d01-021",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d01-021)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)]</td><td id=\"m_audio_1\">[(zhu4)(ding4)]</td><td id=\"m_audio_2\">[(jiu4)]</td><td id=\"m_audio_3\">[(xiu1)]</td><td id=\"m_audio_4\">[(bu2)(shang4)(qu4)]</td><td id=\"m_audio_5\">[(le)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha-)</td><td id=\"m_yueyin_1\">(tru` ting`)</td><td id=\"m_yueyin_2\">(chi:âu`)</td><td id=\"m_yueyin_3\">(xi:âu-)</td><td id=\"m_yueyin_4\">(pú)(shang` ch'uy`)</td><td id=\"m_yueyin_5\">(lơ)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他</td><td id=\"m_hanzi_1\">註定</td><td id=\"m_hanzi_2\">就</td><td id=\"m_hanzi_3\">修</td><td id=\"m_hanzi_4\">不上去</td><td id=\"m_hanzi_5\">了</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tā</td><td id=\"m_pinyin_1\">zhùdìng</td><td id=\"m_pinyin_2\">jiù</td><td id=\"m_pinyin_3\">xiū</td><td id=\"m_pinyin_4\">bú shàngqù</td><td id=\"m_pinyin_5\">le</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">anh ta</td><td id=\"m_nghia_1\">nhất định</td><td id=\"m_nghia_2\">sẽ</td><td id=\"m_nghia_3\">tu</td><td id=\"m_nghia_4\">không lên được</td><td id=\"m_nghia_5\">nữa</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>anh ta nhất định sẽ tu không lên được nữa.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">họ nhất định rồi sẽ không thể tu lên được nữa.</span></p>\n      </div>",
    tableData: [{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"anh ta"},{"hanzi":"註定","audio":"[(zhu4)(ding4)]","pinyin":"zhùdìng","yueyin":"(tru` ting`)","nghia":"nhất định, định sẵn là"},{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"sẽ, thì, là (nhấn mạnh kết quả tất yếu)"},{"hanzi":"修","audio":"[(xiu1)]","pinyin":"xiū","yueyin":"(xi:âu-)","nghia":"tu, tu luyện"},{"hanzi":"不上去","audio":"[(bu2)(shang4)(qu4)]","pinyin":"bú shàngqù","yueyin":"(pú)(shang` ch'uy`)","nghia":"không lên được (bổ ngữ xu hướng khả năng)"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"rồi, nữa....trợ từ ngữ khí."}]
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