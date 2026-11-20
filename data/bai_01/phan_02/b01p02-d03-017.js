/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d03-017",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d03-017)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(ji3)(bai3)(nian2)]</td><td id=\"m_audio_1\">[(dou1)(guo4)(qu4)(le)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(ke3)]</td><td id=\"m_audio_4\">[(xian4)(zai4)(hai2)(you3)(ren2)]</td><td id=\"m_audio_5\">[(si3)(bao4)(zhe)]</td><td id=\"m_audio_6\">[(chan2)(zong1)(de)(li3)]</td><td id=\"m_audio_7\">[(bu2)(fang4)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(chỉ)(pải)(ni:én)</td><td id=\"m_yueyin_1\">(tâu-)(cua` ch'uy`)(lơ)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(khửa)</td><td id=\"m_yueyin_4\">(xi:en` zai`)(hái)(yẩu)(rấn)</td><td id=\"m_yueyin_5\">(sử)(pao` trơ)</td><td id=\"m_yueyin_6\">(tr'án zung-)(tơ)(lỉ)</td><td id=\"m_yueyin_7\">(pú)(fang`)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">幾百年</td><td id=\"m_hanzi_1\">都過去了</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">可</td><td id=\"m_hanzi_4\">現在還有人</td><td id=\"m_hanzi_5\"><font color=\"#f97316\">死</font><font color=\"#a855f7\">抱著</font></td><td id=\"m_hanzi_6\">禪宗的理</td><td id=\"m_hanzi_7\">不放</td><td id=\"m_hanzi_8\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">jǐ bǎi nián</td><td id=\"m_pinyin_1\">dōu guòqù le</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">kě</td><td id=\"m_pinyin_4\">xiànzài hái yǒu rén</td><td id=\"m_pinyin_5\">sǐ bàozhe</td><td id=\"m_pinyin_6\">chánzōng de lǐ</td><td id=\"m_pinyin_7\">bú fàng</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">mấy trăm năm</td><td id=\"m_nghia_1\">đều qua đi rồi</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">nhưng</td><td id=\"m_nghia_4\">hiện tại vẫn có người</td><td id=\"m_nghia_5\">chết cứng ôm chặt</td><td id=\"m_nghia_6\">Thiền tông về Lý</td><td id=\"m_nghia_7\">không buông</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">mấy trăm năm đều qua đi rồi, nhưng hiện tại vẫn có người [</font><font color=\"#f97316\">chết cứng</font><font color=\"#000000\"> </font><font color=\"#a855f7\">ôm chặt</font><font color=\"#000000\">] Thiền tông về Lý không buông.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Mấy trăm năm qua rồi, đến nay vẫn có người ôm chết cứng cái lý của Thiền tông mà không bỏ.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"幾百年","audio":"[(ji3)(bai3)(nian2)]","pinyin":"jǐ bǎi nián","yueyin":"(chỉ)(pải)(ni:én)","nghia":"mấy trăm năm"},{"hanzi":"都過去了","audio":"[(dou1)(guo4)(qu4)(le)]","pinyin":"dōu guòqù le","yueyin":"(tâu-)(cua` ch'uy`)(lơ)","nghia":"đều qua đi rồi"},{"hanzi":"可","audio":"[(ke3)]","pinyin":"kě","yueyin":"(khửa)","nghia":"nhưng (=可是)"},{"hanzi":"現在還有人","audio":"[(xian4)(zai4)(hai2)(you3)(ren2)]","pinyin":"xiànzài hái yǒu rén","yueyin":"(xi:en` zai`)(hái)(yẩu)(rấn)","nghia":"hiện tại vẫn có người"},{"hanzi":"死抱著","audio":"[(si3)(bao4)(zhe)]","pinyin":"sǐ bàozhe","yueyin":"(sử)(pao` trơ)","nghia":"chết cứng ôm chặt"},{"hanzi":"禪宗的理","audio":"[(chan2)(zong1)(de)(li3)]","pinyin":"chánzōng de lǐ","yueyin":"(tr'án zung-)(tơ)(lỉ)","nghia":"Thiền tông về Lý"},{"hanzi":"不放","audio":"[(bu2)(fang4)]","pinyin":"bú fàng","yueyin":"(pú)(fang`)","nghia":"không buông"}]
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