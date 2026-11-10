/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d05-002",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d05-002)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(yi1)]</td><td id=\"m_audio_1\">[(wo3)]</td><td id=\"m_audio_2\">[(kan4)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(dou1)]</td><td id=\"m_audio_5\">[(mei2)(you3)]</td><td id=\"m_audio_6\">[(zhen1)(zheng4)]</td><td id=\"m_audio_7\">[(de)]</td><td id=\"m_audio_8\">[(ba3)]</td><td id=\"m_audio_9\">[(bing4)]</td><td id=\"m_audio_10\">[(zhi4)(hao3)]</td><td id=\"m_audio_11\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(y-)</td><td id=\"m_yueyin_1\">(gủa)</td><td id=\"m_yueyin_2\">(khan`)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(tâu-)</td><td id=\"m_yueyin_5\">(mấy yẩu)</td><td id=\"m_yueyin_6\">(trân- trâng`)</td><td id=\"m_yueyin_7\">(tơ)</td><td id=\"m_yueyin_8\">(pả)</td><td id=\"m_yueyin_9\">(ping`)</td><td id=\"m_yueyin_10\">(tri*` hảo)</td><td id=\"m_yueyin_11\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">依</td><td id=\"m_hanzi_1\">我</td><td id=\"m_hanzi_2\">看</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">都</td><td id=\"m_hanzi_5\">沒有</td><td id=\"m_hanzi_6\">真正</td><td id=\"m_hanzi_7\">的</td><td id=\"m_hanzi_8\">把</td><td id=\"m_hanzi_9\">病</td><td id=\"m_hanzi_10\">治好</td><td id=\"m_hanzi_11\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">yī</td><td id=\"m_pinyin_1\">wǒ</td><td id=\"m_pinyin_2\">kàn</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">dōu</td><td id=\"m_pinyin_5\">méiyǒu</td><td id=\"m_pinyin_6\">zhēnzhèng</td><td id=\"m_pinyin_7\">de</td><td id=\"m_pinyin_8\">bǎ</td><td id=\"m_pinyin_9\">bìng</td><td id=\"m_pinyin_10\">zhìhǎo</td><td id=\"m_pinyin_11\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">theo</td><td id=\"m_nghia_1\">tôi</td><td id=\"m_nghia_2\">thấy</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">đều</td><td id=\"m_nghia_5\">không có</td><td id=\"m_nghia_6\">chân chính</td><td id=\"m_nghia_7\">mà</td><td id=\"m_nghia_8\">đem</td><td id=\"m_nghia_9\">bệnh</td><td id=\"m_nghia_10\">trị khỏi</td><td id=\"m_nghia_11\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>theo tôi thấy, đều không có chân chính mà đem bệnh trị khỏi,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Theo tôi thấy, [họ] đều không thật sự trị khỏi bệnh;</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"依","audio":"[(yi1)]","pinyin":"yī","yueyin":"(y-)","nghia":"theo, dựa theo"},{"hanzi":"我","audio":"[(wo3)]","pinyin":"wǒ","yueyin":"(gủa)","nghia":"tôi"},{"hanzi":"看","audio":"[(kan4)]","pinyin":"kàn","yueyin":"(khan`)","nghia":"thấy, nhìn nhận"},{"hanzi":"都","audio":"[(dou1)]","pinyin":"dōu","yueyin":"(tâu-)","nghia":"đều"},{"hanzi":"沒有","audio":"[(mei2)(you3)]","pinyin":"méiyǒu","yueyin":"(mấy yẩu)","nghia":"không có"},{"hanzi":"真正","audio":"[(zhen1)(zheng4)]","pinyin":"zhēnzhèng","yueyin":"(trân- trâng`)","nghia":"chân chính"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"mà (= 地, trợ từ trạng ngữ)"},{"hanzi":"把","audio":"[(ba3)]","pinyin":"bǎ","yueyin":"(pả)","nghia":"mang, đem"},{"hanzi":"病","audio":"[(bing4)]","pinyin":"bìng","yueyin":"(ping`)","nghia":"bệnh"},{"hanzi":"治好","audio":"[(zhi4)(hao3)]","pinyin":"zhìhǎo","yueyin":"(tri*` hảo)","nghia":"trị khỏi"}]
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