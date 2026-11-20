/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-016",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-016)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(da2)(mo2)(dou1)(jiang3)]</td><td id=\"m_audio_1\">[(ta1)(zhi3)(neng2)(chuan2)]</td><td id=\"m_audio_2\">[(liu4)(zu3)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(yi3)(hou4)]</td><td id=\"m_audio_5\">[(jiu4)(bu4)(xing2)(le)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tá múa)(tâu-)(chi:ảng)</td><td id=\"m_yueyin_1\">(tha-)(trỉ*)(nấng)(tr'oán)</td><td id=\"m_yueyin_2\">(li:âu` zủ)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(ỷ hâu`)</td><td id=\"m_yueyin_5\">(chi:âu`)(pu`)(xíng)(lơ)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">達摩都講</td><td id=\"m_hanzi_1\">他只能傳</td><td id=\"m_hanzi_2\">六祖</td><td id=\"m_hanzi_3\">,</td><td id=\"m_hanzi_4\">以後</td><td id=\"m_hanzi_5\">就不行了</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">dámó dōu jiǎng</td><td id=\"m_pinyin_1\">tā zhǐ néng chuán</td><td id=\"m_pinyin_2\">liùzǔ</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">yǐhòu</td><td id=\"m_pinyin_5\">jiù bù xíng le</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">Đạt Ma đều giảng</td><td id=\"m_nghia_1\">ông chỉ có thể truyền</td><td id=\"m_nghia_2\">Lục tổ</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">sau này</td><td id=\"m_nghia_5\">thì không được nữa</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>Đạt Ma đều giảng ông chỉ có thể truyền Lục tổ, sau này thì không được nữa.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Đạt Ma giảng rõ là nó chỉ có thể truyền đến lục tổ, sau đó không dùng được nữa.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"達摩都講","audio":"[(da2)(mo2)(dou1)(jiang3)]","pinyin":"dámó dōu jiǎng","yueyin":"(tá múa)(tâu-)(chi:ảng)","nghia":"Đạt Ma đều giảng"},{"hanzi":"他只能傳","audio":"[(ta1)(zhi3)(neng2)(chuan2)]","pinyin":"tā zhǐ néng chuán","yueyin":"(tha-)(trỉ*)(nấng)(tr'oán)","nghia":"ông chỉ có thể truyền"},{"hanzi":"六祖","audio":"[(liu4)(zu3)]","pinyin":"liùzǔ","yueyin":"(li:âu` zủ)","nghia":"Lục tổ"},{"hanzi":"以後","audio":"[(yi3)(hou4)]","pinyin":"yǐhòu","yueyin":"(ỷ hâu`)","nghia":"sau này"},{"hanzi":"就不行了","audio":"[(jiu4)(bu4)(xing2)(le)]","pinyin":"jiù bù xíng le","yueyin":"(chi:âu`)(pu`)(xíng)(lơ)","nghia":"thì không được nữa"}]
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