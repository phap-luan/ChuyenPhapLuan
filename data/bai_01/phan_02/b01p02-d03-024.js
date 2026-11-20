/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-024",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-024)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ta1)]</td><td id=\"m_audio_1\">[(mei3)(ti2)(gao1)(yi2)(ge4)(ceng2)(ci4)(de)(shi2hou)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(hui2)(tou2)(yi2)(kan4)]</td><td id=\"m_audio_4\">[(zi4)(ji3)]</td><td id=\"m_audio_5\">[(gang1)(gang1)(jiang3)(guo4)(de)(fa3)]</td><td id=\"m_audio_6\">[(dou1)(bu2)(dui4)(le)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(tha-)</td><td id=\"m_yueyin_1\">(mẩy)(thí cao-)(ý)(cưa`)(s'ấng s'ư`)(tơ)(shí* hâu)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(huấy thấu)(ý)(khan`)</td><td id=\"m_yueyin_4\">(zư`* chỉ)</td><td id=\"m_yueyin_5\">(cang- cang-)(chi:ảng cua`)(tơ)(fả)</td><td id=\"m_yueyin_6\">(tâu-)(pú)(tuây`)(lơ)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">他</td><td id=\"m_hanzi_1\">每提高一個層次<font color=\"#f97316\">的時候</font></td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">回頭一看</td><td id=\"m_hanzi_4\">自己</td><td id=\"m_hanzi_5\"><font color=\"#ec4899\">剛剛</font>講過的法</td><td id=\"m_hanzi_6\">都不對了</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">tā</td><td id=\"m_pinyin_1\">měi tígāo yí gè céngcì de shíhou</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">huítóu yí kàn</td><td id=\"m_pinyin_4\">zìjǐ</td><td id=\"m_pinyin_5\">gānggāng jiǎngguò de fǎ</td><td id=\"m_pinyin_6\">dōu bú duì le</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">ông ấy</td><td id=\"m_nghia_1\"><font color=\"#f97316\">khi</font> mỗi đề cao một tầng thứ</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">quay đầu nhìn thấy</td><td id=\"m_nghia_4\">bản thân</td><td id=\"m_nghia_5\">vừa mới giảng qua về Pháp</td><td id=\"m_nghia_6\">đều không đúng nữa</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">ông ấy </font><font color=\"#f97316\">khi</font><font color=\"#000000\"> mỗi đề cao một tầng thứ, quay đầu nhìn thấy bản thân </font><font color=\"#ec4899\">vừa mới</font><font color=\"#000000\"> giảng qua về Pháp đều không đúng nữa.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Mỗi khi đề cao [lên] một tầng, Ông quay lại xét thấy Pháp mình vừa giảng xong không còn đúng nữa.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"他","audio":"[(ta1)]","pinyin":"tā","yueyin":"(tha-)","nghia":"ông ấy"},{"hanzi":"每提高一個層次的時候","audio":"[(mei3)(ti2)(gao1)(yi2)(ge4)(ceng2)(ci4)(de)(shi2hou)]","pinyin":"měi tígāo yí gè céngcì de shíhou","yueyin":"(mẩy)(thí cao-)(ý)(cưa`)(s'ấng s'ư`)(tơ)(shí* hâu)","nghia":"khi mỗi đề cao một tầng thứ"},{"hanzi":"回頭一看","audio":"[(hui2)(tou2)(yi2)(kan4)]","pinyin":"huítóu yí kàn","yueyin":"(huấy thấu)(ý)(khan`)","nghia":"quay đầu nhìn lại"},{"hanzi":"自己","audio":"[(zi4)(ji3)]","pinyin":"zìjǐ","yueyin":"(zư`* chỉ)","nghia":"bản thân"},{"hanzi":"剛剛講過的法","audio":"[(gang1)(gang1)(jiang3)(guo4)(de)(fa3)]","pinyin":"gānggāng jiǎngguò de fǎ","yueyin":"(cang- cang-)(chi:ảng cua`)(tơ)(fả)","nghia":"vừa mới giảng qua về Pháp"},{"hanzi":"都不對了","audio":"[(dou1)(bu2)(dui4)(le)]","pinyin":"dōu bú duì le","yueyin":"(tâu-)(pú)(tuây`)(lơ)","nghia":"đều không đúng nữa"}]
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