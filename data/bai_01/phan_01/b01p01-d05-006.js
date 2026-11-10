/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d05-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d05-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhen1)(zheng4)]</td><td id=\"m_audio_1\">[(neng2)]</td><td id=\"m_audio_2\">[(da2)(dao4)]</td><td id=\"m_audio_3\">[(zhe4)(yi4)(dian3)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(zhe4)(ge)(ren2)]</td><td id=\"m_audio_6\">[(ceng2)(ci4)]</td><td id=\"m_audio_7\">[(ye3)]</td><td id=\"m_audio_8\">[(bu4)]</td><td id=\"m_audio_9\">[(di1)]</td><td id=\"m_audio_10\">[(le)]</td><td id=\"m_audio_11\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trân- trâng`)</td><td id=\"m_yueyin_1\">(nấng)</td><td id=\"m_yueyin_2\">(tá tao`)</td><td id=\"m_yueyin_3\">(trưa`)(y`)(ti:ẻn)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(trưa` cưa)(rấn)</td><td id=\"m_yueyin_6\">(s'ấng s'ư`)</td><td id=\"m_yueyin_7\">(yể)</td><td id=\"m_yueyin_8\">(pu`)</td><td id=\"m_yueyin_9\">(ti-)</td><td id=\"m_yueyin_10\">(lơ)</td><td id=\"m_yueyin_11\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">真正</td><td id=\"m_hanzi_1\">能</td><td id=\"m_hanzi_2\">達到</td><td id=\"m_hanzi_3\">這一點</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">這個人</td><td id=\"m_hanzi_6\">層次</td><td id=\"m_hanzi_7\">也</td><td id=\"m_hanzi_8\">不</td><td id=\"m_hanzi_9\">低</td><td id=\"m_hanzi_10\">了</td><td id=\"m_hanzi_11\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhēnzhèng</td><td id=\"m_pinyin_1\">néng</td><td id=\"m_pinyin_2\">dádào</td><td id=\"m_pinyin_3\">zhè yì diǎn</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">zhège rén</td><td id=\"m_pinyin_6\">céngcì</td><td id=\"m_pinyin_7\">yě</td><td id=\"m_pinyin_8\">bù</td><td id=\"m_pinyin_9\">dī</td><td id=\"m_pinyin_10\">le</td><td id=\"m_pinyin_11\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">chân chính</td><td id=\"m_nghia_1\">có thể</td><td id=\"m_nghia_2\">đạt đến</td><td id=\"m_nghia_3\">điểm này</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">người này</td><td id=\"m_nghia_6\">tầng thứ</td><td id=\"m_nghia_7\">cũng</td><td id=\"m_nghia_8\">không</td><td id=\"m_nghia_9\">thấp</td><td id=\"m_nghia_10\">rồi</td><td id=\"m_nghia_11\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>chân chính có thể đạt đến điểm này, người này tầng thứ cũng không thấp rồi.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">thật sự đạt đến điểm ấy, [thì] tầng của cá nhân đó cũng không thấp lắm.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"chân chính"},{"hanzi":"能","audio":"[(neng2)]","pinyin":"néng","yueyin":"(nấng)","nghia":"có thể"},{"hanzi":"達到","audio":"[(da2)(dao4)]","pinyin":"dádào","yueyin":"(tá tao`)","nghia":"đạt đến"},{"hanzi":"這一點","audio":"[(zhe4)(yi4)(dian3)]","pinyin":"zhè yì diǎn","yueyin":"(trưa`)(y`)(ti:ẻn)","nghia":"một điểm này, mức này"},{"hanzi":"這個人","audio":"[(zhe4)(ge)(ren2)]","pinyin":"zhège rén","yueyin":"(trưa` cưa)(rấn)","nghia":"người này"},{"hanzi":"層次","audio":"[(ceng2)(ci4)]","pinyin":"céngcì","yueyin":"(s'ấng s'ư`)","nghia":"tầng thứ"},{"hanzi":"也","audio":"[(ye3)]","pinyin":"yě","yueyin":"(yể)","nghia":"cũng"},{"hanzi":"不","audio":"[(bu4)]","pinyin":"bù","yueyin":"(pu`)","nghia":"không"},{"hanzi":"低","audio":"[(di1)]","pinyin":"dī","yueyin":"(ti-)","nghia":"thấp"},{"hanzi":"了","audio":"[(le)]","pinyin":"le","yueyin":"(lơ)","nghia":"rồi: trợ từ ngữ khí"}]
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