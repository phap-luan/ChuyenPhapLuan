/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d10-004",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d10-004)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(men)(shi4)]</td><td id=\"m_audio_1\">[(zhen1)(zheng4)]</td><td id=\"m_audio_2\">[(ren2)(ti3)(xiu1)(lian4)]</td><td id=\"m_audio_3\">[(de)]</td><td id=\"m_audio_4\">[(liang3)(da4)(ceng2)(ci4)]</td><td id=\"m_audio_5\">[(de)]</td><td id=\"m_audio_6\">[(bian4)(hua4)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa mân)(shi*`)</td><td id=\"m_yueyin_1\">(trân- trâng`)</td><td id=\"m_yueyin_2\">(rấn thỉ)(xi:âu- li:en`)</td><td id=\"m_yueyin_3\">(tơ)</td><td id=\"m_yueyin_4\">(li:ảng)(ta`)(s'ấng s'ư`)</td><td id=\"m_yueyin_5\">(tơ)</td><td id=\"m_yueyin_6\">(pi:en` hoa`)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我們是</td><td id=\"m_hanzi_1\">真正</td><td id=\"m_hanzi_2\">人體修煉</td><td id=\"m_hanzi_3\"><font color=\"#f97316\">的</font></td><td id=\"m_hanzi_4\">兩大層次</td><td id=\"m_hanzi_5\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_6\">變化</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒmen shì</td><td id=\"m_pinyin_1\">zhēnzhèng</td><td id=\"m_pinyin_2\">réntǐ xiūliàn</td><td id=\"m_pinyin_3\">de</td><td id=\"m_pinyin_4\">liǎng dà céngcì</td><td id=\"m_pinyin_5\">de</td><td id=\"m_pinyin_6\">biànhuà</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chúng tôi là</td><td id=\"m_nghia_1\">chân chính</td><td id=\"m_nghia_2\">nhân thể tu luyện</td><td id=\"m_nghia_3\">về</td><td id=\"m_nghia_4\">hai đại tầng thứ</td><td id=\"m_nghia_5\">về</td><td id=\"m_nghia_6\">biến hóa</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">chúng tôi là chân chính nhân thể tu luyện </font><font color=\"#f97316\">về</font><font color=\"#000000\"> hai đại tầng thứ </font><font color=\"#3b82f6\">về</font><font color=\"#000000\"> biến hóa.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">[Của] chúng tôi là biến hoá tại hai tầng lớn tu luyện [thân] thể người một cách chân chính.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我們是","audio":"[(wo3)(men)(shi4)]","pinyin":"wǒmen shì","yueyin":"(gủa mân)(shi*`)","nghia":"chúng tôi là"},{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"chân chính"},{"hanzi":"人體修煉","audio":"[(ren2)(ti3)(xiu1)(lian4)]","pinyin":"réntǐ xiūliàn","yueyin":"(rấn thỉ)(xi:âu- li:en`)","nghia":"nhân thể tu luyện"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"兩大層次","audio":"[(liang3)(da4)(ceng2)(ci4)]","pinyin":"liǎng dà céngcì","yueyin":"(li:ảng)(ta`)(s'ấng s'ư`)","nghia":"hai đại tầng thứ"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"變化","audio":"[(bian4)(hua4)]","pinyin":"biànhuà","yueyin":"(pi:en` hoa`)","nghia":"biến hóa"}]
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