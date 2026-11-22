/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d04-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d04-001)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zui4)(hou4)]</td><td id=\"m_audio_1\">[(shi4)(jia1)(mou2)(ni2)]</td><td id=\"m_audio_2\">[(hai2)(jiang3)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(wo3)(yi2)(bei4)(zi)]</td><td id=\"m_audio_5\">[(shen2)(me)(fa3)(dou1)]</td><td id=\"m_audio_6\">[(mei2)(you3)(jiang3)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(zuây` hâu`)</td><td id=\"m_yueyin_1\">(shi*` chi:a-)(mấu ní)</td><td id=\"m_yueyin_2\">(hái)(chi:ảng)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(gủa)(ý pây` zư)</td><td id=\"m_yueyin_5\">(shấn mơ)(fả)(tâu-)</td><td id=\"m_yueyin_6\">(mấy yẩu)(chi:ảng)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">最後</td><td id=\"m_hanzi_1\">釋迦牟尼</td><td id=\"m_hanzi_2\">還講</td><td id=\"m_hanzi_3\">:</td><td id=\"m_hanzi_4\">我一輩子</td><td id=\"m_hanzi_5\">甚麼法都</td><td id=\"m_hanzi_6\">沒有講</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zuìhòu</td><td id=\"m_pinyin_1\">shìjiā móuní</td><td id=\"m_pinyin_2\">hái jiǎng</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">wǒ yíbèizi</td><td id=\"m_pinyin_5\">shénme fǎ dōu</td><td id=\"m_pinyin_6\">méiyǒu jiǎng</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">cuối cùng</td><td id=\"m_nghia_1\">thích ca mâu ni</td><td id=\"m_nghia_2\">còn giảng</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">ta một đời</td><td id=\"m_nghia_5\">Pháp nào cũng</td><td id=\"m_nghia_6\">không có giảng</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>cuối cùng thích ca mâu ni còn giảng: ta một đời Pháp nào cũng không có giảng.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Cuối cùng Thích Ca Mâu Ni lại giảng: ‘Ta đời này chưa có giảng Pháp nào hết’.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"最後","audio":"[(zui4)(hou4)]","pinyin":"zuìhòu","yueyin":"(zuây` hâu`)","nghia":"cuối cùng"},{"hanzi":"釋迦牟尼","audio":"[(shi4)(jia1)(mou2)(ni2)]","pinyin":"shìjiā móuní","yueyin":"(shi*` chi:a-)(mấu ní)","nghia":"thích ca mâu ni"},{"hanzi":"還講","audio":"[(hai2)(jiang3)]","pinyin":"hái jiǎng","yueyin":"(hái)(chi:ảng)","nghia":"còn giảng"},{"hanzi":"我一輩子","audio":"[(wo3)(yi2)(bei4)(zi)]","pinyin":"wǒ yíbèizi","yueyin":"(gủa)(ý pây` zư)","nghia":"ta một đời"},{"hanzi":"甚麼法都","audio":"[(shen2)(me)(fa3)(dou1)]","pinyin":"shénme fǎ dōu","yueyin":"(shấn mơ)(fả)(tâu-)","nghia":"Pháp nào cũng"},{"hanzi":"沒有講","audio":"[(mei2)(you3)(jiang3)]","pinyin":"méiyǒu jiǎng","yueyin":"(mấy yẩu)(chi:ảng)","nghia":"không có giảng"}]
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