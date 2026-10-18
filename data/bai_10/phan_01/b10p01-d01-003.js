/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b10p01-d01-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b10p01-d01-003)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\" style=\"\"><font color=\"#000000\">[(nei4)(han2)]</font></td><td id=\"m_audio_1\"><font color=\"#000000\">[(hong2)(wei1)]</font></td><td id=\"m_audio_2\" style=\"\"><font color=\"#000000\">[(zhi4)(ji2)]</font></td><td id=\"m_audio_3\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\" style=\"\"><font color=\"#000000\">(nây` hán)</font></td><td id=\"m_yueyin_1\"><font color=\"#000000\">(húng)(guây-)</font></td><td id=\"m_yueyin_2\" style=\"\"><font color=\"#000000\">(tri*` chí)</font></td><td id=\"m_yueyin_3\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\" style=\"\"><font color=\"#000000\">內涵</font></td><td id=\"m_hanzi_1\"><font color=\"#000000\">洪微</font></td><td id=\"m_hanzi_2\" style=\"\"><font color=\"#000000\">至極</font></td><td id=\"m_hanzi_3\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\" style=\"\"><font color=\"#000000\">nèihán</font></td><td id=\"m_pinyin_1\"><font color=\"#000000\">hóng&nbsp;wēi</font></td><td id=\"m_pinyin_2\" style=\"\"><font color=\"#000000\">zhìjí</font></td><td id=\"m_pinyin_3\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\" style=\"\"><font color=\"#000000\">Nội hàm</font></td><td id=\"m_nghia_1\"><font color=\"#000000\">Hồng Vi</font></td><td id=\"m_nghia_2\" style=\"\"><font color=\"#000000\">Chí cực</font></td><td id=\"m_nghia_3\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><br><p style=\"margin-top: 0px;\">\n          <img draggable=\"false\" role=\"img\" class=\"emoji\" alt=\"🇹🇼\" src=\"https://s.w.org/images/core/emoji/17.0.2/svg/1f1f9-1f1fc.svg\" style=\"font-family: Nunito, sans-serif; max-width: 100%; color: rgb(33, 37, 41); margin: 0px 0.07em !important; vertical-align: -0.1em !important; height: 1em !important; display: inline !important; border-width: medium !important; border-style: none !important; border-color: currentcolor !important; border-image: none !important; box-shadow: none !important; width: 1em !important; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\">&nbsp;<font color=\"#000000\"><span style=\"font-size: 16px; font-weight: bold;\">nội hàm</span><span style=\"font-size: 16px; font-weight: bold;\">&nbsp;-&nbsp;</span><span style=\"font-size: 16px; font-weight: bold;\">Hồng Vi</span><span style=\"font-size: 16px; font-weight: bold;\">&nbsp;-&nbsp;</span><span style=\"font-size: 16px; font-weight: bold;\">chí cực,</span></font></p><p style=\"margin-top: 0px;\"><i><font color=\"#64748b\"><span style=\"font-size: 14px;\"><span style=\"font-size: 12px;\">(Học tiếng Trung, cố gắng tư duy theo thứ tự Ngữ pháp mà người Trung tư duy, mới đầu có thể thấy khó, sau sẽ dần quen)</span></span></font></i><span style=\"font-size: 16px; font-weight: bold;\"><font color=\"#a855f7\"></font></span></p><p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">nội hàm từ cực nhỏ đến cực lớn,</span></p>\n      </div>",
    tableData: [{"hanzi":"內涵","audio":"[(nei4)(han2)]","pinyin":"nèihán","yueyin":"(nây` hán)","nghia":"Nội hàm: ý nghĩa/nội dung ẩn chứa bên trong","color":"rgb(239, 68, 68)"},{"hanzi":"洪微","audio":"[(hong2)(wei1)]","pinyin":"hóng wēi","yueyin":"(húng)(guây-)","nghia":"Hồng Vi: cực lớn, cực nhỏ"},{"hanzi":"至極","audio":"[(zhi4)(ji2)]","pinyin":"zhìjí","yueyin":"(tri*` chí)","nghia":"Chí cực: Đến cực điểm, tận cùng, vô tận, hết mức","color":"rgb(168, 85, 247)"}]
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