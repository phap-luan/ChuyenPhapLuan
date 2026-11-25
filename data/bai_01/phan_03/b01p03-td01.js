/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d01-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-td01)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhen1)(,)(shan4)(,)(ren3)]</td><td id=\"m_audio_1\">[(shi4)]</td><td id=\"m_audio_2\">[(heng2)(liang2)]</td><td id=\"m_audio_3\">[(hao3)(huai4)(ren2)]</td><td id=\"m_audio_4\">[(de)]</td><td id=\"m_audio_5\">[(wei2)(yi1)(biao1)(zhun3)]</td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trân- ,)(shan` ,)(rẩn)</td><td id=\"m_yueyin_1\">(shi*`)</td><td id=\"m_yueyin_2\">(hấng li:áng)</td><td id=\"m_yueyin_3\">(hảo hoai`)(rấn)</td><td id=\"m_yueyin_4\">(tơ)</td><td id=\"m_yueyin_5\">(guấy y-)(pi:ao- truẩn)</td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">真,善,忍</td><td id=\"m_hanzi_1\">是</td><td id=\"m_hanzi_2\">衡量</td><td id=\"m_hanzi_3\">好壞人</td><td id=\"m_hanzi_4\">的</td><td id=\"m_hanzi_5\">唯一標準</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhēn, shàn, rěn</td><td id=\"m_pinyin_1\">shì</td><td id=\"m_pinyin_2\">héngliáng</td><td id=\"m_pinyin_3\">hǎohuài rén</td><td id=\"m_pinyin_4\">de</td><td id=\"m_pinyin_5\">wéiyī biāozhǔn</td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">Chân, Thiện, Nhẫn</td><td id=\"m_nghia_1\">là</td><td id=\"m_nghia_2\">nhận định</td><td id=\"m_nghia_3\">người tốt xấu</td><td id=\"m_nghia_4\">về</td><td id=\"m_nghia_5\">duy nhất tiêu chuẩn</td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>Chân, Thiện, Nhẫn là [nhận định người tốt xấu về duy nhất tiêu chuẩn].</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br><span style=\"\" data-sheets-root=\"1\"><b>Chân-Thiện-Nhẫn là tiêu chuẩn duy nhất để nhận định người tốt xấu</b></span></p>\n      </div>",
    tableData: [{"hanzi":"真,善,忍","audio":"[(zhen1)(,)(shan4)(,)(ren3)]","pinyin":"zhēn, shàn, rěn","yueyin":"(trân- ,)(shan` ,)(rẩn)","nghia":"Chân, Thiện, Nhẫn"},{"hanzi":"是","audio":"[(shi4)]","pinyin":"shì","yueyin":"(shi*`)","nghia":"là"},{"hanzi":"衡量","audio":"[(heng2)(liang2)]","pinyin":"héngliáng","yueyin":"(hấng li:áng)","nghia":"đánh giá, nhận định"},{"hanzi":"好壞人","audio":"[(hao3)(huai4)(ren2)]","pinyin":"hǎohuài rén","yueyin":"(hảo hoai`)(rấn)","nghia":"người tốt xấu"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ định ngữ"},{"hanzi":"唯一標準","audio":"[(wei2)(yi1)(biao1)(zhun3)]","pinyin":"wéiyī biāozhǔn","yueyin":"(guấy y-)(pi:ao- truẩn)","nghia":"duy nhất tiêu chuẩn"}]
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