/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d04-012",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d04-012)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(gai3)(dong4)]</td><td id=\"m_audio_1\">[(le)]</td><td id=\"m_audio_2\">[(jiu4)]</td><td id=\"m_audio_3\">[(deng3)(yu2)]</td><td id=\"m_audio_4\">[(qian4)(zhai4)]</td><td id=\"m_audio_5\">[(ke2)(yi3)]</td><td id=\"m_audio_6\">[(bu4)]</td><td id=\"m_audio_7\">[(huan2)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(cải tung`)</td><td id=\"m_yueyin_1\">(lơ)</td><td id=\"m_yueyin_2\">(chi:âu`)</td><td id=\"m_yueyin_3\">(tẩng úy)</td><td id=\"m_yueyin_4\">(ch'i:en` trai`)</td><td id=\"m_yueyin_5\">(khửa ỷ)</td><td id=\"m_yueyin_6\">(pu`)</td><td id=\"m_yueyin_7\">(hoán)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">改動</td><td id=\"m_hanzi_1\">了</td><td id=\"m_hanzi_2\">就</td><td id=\"m_hanzi_3\">等於</td><td id=\"m_hanzi_4\">欠債</td><td id=\"m_hanzi_5\">可以</td><td id=\"m_hanzi_6\">不</td><td id=\"m_hanzi_7\">還</td><td id=\"m_hanzi_8\">；</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">gǎidòng</td><td id=\"m_pinyin_1\">le</td><td id=\"m_pinyin_2\">jiù</td><td id=\"m_pinyin_3\">děngyú</td><td id=\"m_pinyin_4\">qiànzhài</td><td id=\"m_pinyin_5\">kěyǐ</td><td id=\"m_pinyin_6\">bù</td><td id=\"m_pinyin_7\">huán</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">thay đổi</td><td id=\"m_nghia_1\">rồi</td><td id=\"m_nghia_2\">thì</td><td id=\"m_nghia_3\">coi như</td><td id=\"m_nghia_4\">mắc nợ</td><td id=\"m_nghia_5\">có thể</td><td id=\"m_nghia_6\">không</td><td id=\"m_nghia_7\">trả</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>thay đổi rồi thì coi như mắc nợ có thể không trả;</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">thay đổi [nó] cũng tương đương với mắc nợ không phải trả;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"改動","audio":"[(gai3)(dong4)]","pinyin":"gǎidòng","yueyin":"(cải tung`)","nghia":"thay đổi, sửa đổi"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"rồi: trợ từ hoàn thành"},{"hanzi":"就","audio":"[(jiu4)]","pinyin":"jiù","yueyin":"(chi:âu`)","nghia":"thì, sẽ"},{"hanzi":"等於","audio":"[(deng3)(yu2)]","pinyin":"děngyú","yueyin":"(tẩng úy)","nghia":"tương đương với, coi như"},{"hanzi":"欠債","audio":"[(qian4)(zhai4)]","pinyin":"qiànzhài","yueyin":"(ch'i:en` trai`)","nghia":"thiếu nợ, mắc nợ"},{"hanzi":"可以","audio":"[(ke2)(yi3)]","pinyin":"kěyǐ","yueyin":"(khửa ỷ)","nghia":"có thể"},{"hanzi":"不","audio":"[(bu4)]","pinyin":"bù","yueyin":"(pu`)","nghia":"không"},{"hanzi":"還","audio":"[(huan2)]","pinyin":"huán","yueyin":"(hoán)","nghia":"hoàn, trả"}]
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