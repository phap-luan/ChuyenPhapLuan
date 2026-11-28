/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d04-001",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d04-001)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhen1)(shan4)(ren3)]</td><td id=\"m_audio_1\">[(zhe4)(zhong3)(te4)(xing4)]</td><td id=\"m_audio_2\">[(shi4)(heng2)(liang2)]</td><td id=\"m_audio_3\">[(yu3)(zhou4)(zhong1)]</td><td id=\"m_audio_4\">[(hao3)(yu3)(huai4)]</td><td id=\"m_audio_5\">[(de)(biao1)(zhun3)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trân-)(shan`)(rẩn)</td><td id=\"m_yueyin_1\">(trưa`)(trủng)(thưa` xing`)</td><td id=\"m_yueyin_2\">(shi*`)(hấng li:áng)</td><td id=\"m_yueyin_3\">(ủy trâu`)(trung-)</td><td id=\"m_yueyin_4\">(hảo)(ủy)(hoai`)</td><td id=\"m_yueyin_5\">(tơ)(pi:ao- truẩn)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">真、善、忍</td><td id=\"m_hanzi_1\">這種特性</td><td id=\"m_hanzi_2\">是衡量</td><td id=\"m_hanzi_3\">宇宙<font color=\"#3b82f6\">中</font></td><td id=\"m_hanzi_4\">好與壞</td><td id=\"m_hanzi_5\">的標準</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhēn shàn rěn</td><td id=\"m_pinyin_1\">zhè zhǒng tèxìng</td><td id=\"m_pinyin_2\">shì héngliáng</td><td id=\"m_pinyin_3\">yǔzhòu zhōng</td><td id=\"m_pinyin_4\">hǎo yǔ huài</td><td id=\"m_pinyin_5\">de biāozhǔn</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">Chân, Thiện, Nhẫn</td><td id=\"m_nghia_1\">chủng đặc tính này</td><td id=\"m_nghia_2\">là đo lường</td><td id=\"m_nghia_3\"><font color=\"#3b82f6\">trong</font> vũ trụ</td><td id=\"m_nghia_4\">tốt và xấu</td><td id=\"m_nghia_5\">về tiêu chuẩn</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>Chân, Thiện, Nhẫn chủng đặc tính này là (để) đo lường trong vũ trụ tốt và xấu về tiêu chuẩn</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Chủng đặc tính Chân-Thiện-Nhẫn là tiêu chuẩn để nhận định tốt và xấu trong vũ trụ.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"真、善、忍","audio":"[(zhen1)(shan4)(ren3)]","pinyin":"zhēn shàn rěn","yueyin":"(trân-)(shan`)(rẩn)","nghia":"Chân, Thiện, Nhẫn"},{"hanzi":"這種特性","audio":"[(zhe4)(zhong3)(te4)(xing4)]","pinyin":"zhè zhǒng tèxìng","yueyin":"(trưa`)(trủng)(thưa` xing`)","nghia":"chủng đặc tính này"},{"hanzi":"是衡量","audio":"[(shi4)(heng2)(liang2)]","pinyin":"shì héngliáng","yueyin":"(shi*`)(hấng li:áng)","nghia":"là đo lường"},{"hanzi":"宇宙中","audio":"[(yu3)(zhou4)(zhong1)]","pinyin":"yǔzhòu zhōng","yueyin":"(ủy trâu`)(trung-)","nghia":"trong vũ trụ"},{"hanzi":"好與壞","audio":"[(hao3)(yu3)(huai4)]","pinyin":"hǎo yǔ huài","yueyin":"(hảo)(ủy)(hoai`)","nghia":"tốt và xấu"},{"hanzi":"的標準","audio":"[(de)(biao1)(zhun3)]","pinyin":"de biāozhǔn","yueyin":"(tơ)(pi:ao- truẩn)","nghia":"về tiêu chuẩn"}]
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