/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b10p01-d04-011",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b10p01-d04-011)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><font color=\"#000000\"></font><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\"><font color=\"#000000\">[(tong2)(shi2)]</font></td><td id=\"m_audio_1\"><font color=\"#000000\">[(hui4)]</font></td><td id=\"m_audio_2\"><font color=\"#000000\">[(dai4)(lai2)]</font></td><td id=\"m_audio_3\"><font color=\"#000000\">[(shan4)(bao4)]</font></td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\"><font color=\"#000000\">[(fu2)(shou4)]</font></td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\"><font color=\"#000000\">(thúng shí*)</font></td><td id=\"m_yueyin_1\"><font color=\"#000000\">(huây`)</font></td><td id=\"m_yueyin_2\"><font color=\"#000000\">(tai` lái)</font></td><td id=\"m_yueyin_3\"><font color=\"#000000\">(shan` pao`)</font></td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\"><font color=\"#000000\">(fú shâu`)</font></td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">同時</td><td id=\"m_hanzi_1\">會</td><td id=\"m_hanzi_2\">帶來</td><td id=\"m_hanzi_3\">善報</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">福壽</td><td id=\"m_hanzi_6\">;</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\"><font color=\"#000000\">tóngshí</font></td><td id=\"m_pinyin_1\"><font color=\"#000000\">huì</font></td><td id=\"m_pinyin_2\"><font color=\"#000000\">dàilái</font></td><td id=\"m_pinyin_3\"><font color=\"#000000\">shànbào</font></td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\"><font color=\"#000000\">fúshòu</font></td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\"><font color=\"#000000\">Đồng thời</font></td><td id=\"m_nghia_1\"><font color=\"#000000\">Sẽ</font></td><td id=\"m_nghia_2\"><font color=\"#000000\">Mang đến</font></td><td id=\"m_nghia_3\"><font color=\"#000000\">Thiện báo</font></td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\"><font color=\"#000000\">Phúc thọ</font></td><td id=\"m_nghia_6\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><img draggable=\"false\" role=\"img\" class=\"emoji\" alt=\"🇹🇼\" src=\"https://s.w.org/images/core/emoji/17.0.2/svg/1f1f9-1f1fc.svg\" style=\"font-family: Nunito, sans-serif; max-width: 100%; color: rgb(33, 37, 41); margin: 0px 0.07em !important; vertical-align: -0.1em !important; height: 1em !important; display: inline !important; border-width: medium !important; border-style: none !important; border-color: currentcolor !important; border-image: none !important; box-shadow: none !important; width: 1em !important; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><font color=\"#000000\">&nbsp;</font><font color=\"#000000\"><b>Đồng thời - Sẽ - Mang đến - Thiện báo,- Phúc thọ;</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">đồng thời sẽ mang đến thiện báo và phúc thọ;</span></p>\n      </div>",
    tableData: [{"hanzi":"同時","audio":"[(tong2)(shi2)]","pinyin":"tóngshí","yueyin":"(thúng shí*)","nghia":"Đồng thời, cùng lúc đó"},{"hanzi":"會","audio":"[(hui4)]","pinyin":"huì","yueyin":"(huây`)","nghia":"Sẽ, có khả năng"},{"hanzi":"帶來","audio":"[(dai4)(lai2)]","pinyin":"dàilái","yueyin":"(tai` lái)","nghia":"Mang lại, đem đến, mang đến"},{"hanzi":"善報","audio":"[(shan4)(bao4)]","pinyin":"shànbào","yueyin":"(shan` pao`)","nghia":"Thiện báo, quả báo tốt lành"},{"hanzi":"福壽","audio":"[(fu2)(shou4)]","pinyin":"fúshòu","yueyin":"(fú shâu`)","nghia":"Phúc thọ, may mắn và sống lâu"}]
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