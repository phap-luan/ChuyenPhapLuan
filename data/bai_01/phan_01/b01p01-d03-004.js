/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d03-004",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d03-004)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(du4)(ren2)]</td><td id=\"m_audio_1\">[(na)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(ni3)]</td><td id=\"m_audio_4\">[(jiu4)(shi4)]</td><td id=\"m_audio_5\">[(zhen1)(zheng4)]</td><td id=\"m_audio_6\">[(de)]</td><td id=\"m_audio_7\">[(xiu1)(lian4)]</td><td id=\"m_audio_8\">[(le)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tu` rấn)</td><td id=\"m_yueyin_1\">(na)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(nỉ)</td><td id=\"m_yueyin_4\">(chi:âu` shi*`)</td><td id=\"m_yueyin_5\">(trân- trâng`)</td><td id=\"m_yueyin_6\">(tơ)</td><td id=\"m_yueyin_7\">(xi:âu- li:en`)</td><td id=\"m_yueyin_8\">(lơ)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">度人</td><td id=\"m_hanzi_1\">哪</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">你</td><td id=\"m_hanzi_4\">就是</td><td id=\"m_hanzi_5\">真正</td><td id=\"m_hanzi_6\">的</td><td id=\"m_hanzi_7\">修煉</td><td id=\"m_hanzi_8\">了</td><td id=\"m_hanzi_9\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dùrén</td><td id=\"m_pinyin_1\">na</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">nǐ</td><td id=\"m_pinyin_4\">jiùshì</td><td id=\"m_pinyin_5\">zhēnzhèng</td><td id=\"m_pinyin_6\">de</td><td id=\"m_pinyin_7\">xiūliàn</td><td id=\"m_pinyin_8\">le</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">độ nhân</td><td id=\"m_nghia_1\">ấy</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">bạn</td><td id=\"m_nghia_4\">chính là</td><td id=\"m_nghia_5\">chân chính</td><td id=\"m_nghia_6\">về</td><td id=\"m_nghia_7\">tu luyện</td><td id=\"m_nghia_8\">rồi</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>độ nhân ấy, bạn chính là chân chính về tu luyện rồi,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Độ nhân ấy, chư vị đúng là tu luyện chân chính,</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"度人","audio":"[(du4)(ren2)]","pinyin":"dùrén","yueyin":"(tu` rấn)","nghia":"độ nhân"},{"hanzi":"哪","audio":"[(na)]","pinyin":"na","yueyin":"(na)","nghia":"ấy: trợ từ nêu chủ đề, ngắt nhịp (= 啊)"},{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"就是","audio":"[(jiu4)(shi4)]","pinyin":"jiùshì","yueyin":"(chi:âu` shi*`)","nghia":"chính là"},{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"chân chính, thật sự"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"修煉","audio":"[(xiu1)(lian4)]","pinyin":"xiūliàn","yueyin":"(xi:âu- li:en`)","nghia":"tu luyện"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"rồi: trợ từ ngữ khí"}]
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