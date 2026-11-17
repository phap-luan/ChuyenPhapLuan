/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d01-014",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d01-014)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(chuan2)(gong1)]</td><td id=\"m_audio_1\">[(he2)]</td><td id=\"m_audio_2\">[(qi2)(ta1)(ren2)]</td><td id=\"m_audio_3\">[(chuan2)(gong1)]</td><td id=\"m_audio_4\">[(bu4)(yi2)(yang4)]</td><td id=\"m_audio_5\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)(tr'oán)(cung-)</td><td id=\"m_yueyin_1\">(hứa)</td><td id=\"m_yueyin_2\">(ch'í tha-)(rấn)</td><td id=\"m_yueyin_3\">(tr'oán)(cung-)</td><td id=\"m_yueyin_4\">(pu`)(ý yang`)</td><td id=\"m_yueyin_5\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我傳功</td><td id=\"m_hanzi_1\">和</td><td id=\"m_hanzi_2\"><font color=\"#a855f7\">其他</font>人</td><td id=\"m_hanzi_3\">傳功</td><td id=\"m_hanzi_4\">不一樣</td><td id=\"m_hanzi_5\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ chuángōng</td><td id=\"m_pinyin_1\">hé</td><td id=\"m_pinyin_2\">qítā rén</td><td id=\"m_pinyin_3\">chuángōng</td><td id=\"m_pinyin_4\">bù yíyàng</td><td id=\"m_pinyin_5\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi truyền công</td><td id=\"m_nghia_1\">với</td><td id=\"m_nghia_2\">người khác</td><td id=\"m_nghia_3\">truyền công</td><td id=\"m_nghia_4\">không giống nhau</td><td id=\"m_nghia_5\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">tôi truyền công với [người </font><font color=\"#a855f7\">khác</font><font color=\"#000000\">] truyền công không giống nhau.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tôi truyền công khác với người khác truyền công.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我傳功","audio":"[(wo3)(chuan2)(gong1)]","pinyin":"wǒ chuángōng","yueyin":"(gủa)(tr'oán)(cung-)","nghia":"tôi truyền công"},{"hanzi":"和","audio":"[(he2)]","pinyin":"hé","yueyin":"(hứa)","nghia":"với"},{"hanzi":"其他人","audio":"[(qi2)(ta1)(ren2)]","pinyin":"qítā rén","yueyin":"(ch'í tha-)(rấn)","nghia":"người khác (其他=其它 -> 他 chỉ người,它 chỉ vật)"},{"hanzi":"傳功","audio":"[(chuan2)(gong1)]","pinyin":"chuángōng","yueyin":"(tr'oán)(cung-)","nghia":"truyền công"},{"hanzi":"不一樣","audio":"[(bu4)(yi2)(yang4)]","pinyin":"bù yíyàng","yueyin":"(pu`)(ý yang`)","nghia":"không giống nhau, không một dạng"}]
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