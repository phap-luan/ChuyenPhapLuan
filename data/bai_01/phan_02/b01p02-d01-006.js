/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d01-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d01-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(wo3)(zai4)(jiang3)(ke4)(dang1)(zhong1)]</td><td id=\"m_audio_1\"></td><td id=\"m_audio_2\">[(yao4)(tan2)(dao4)]</td><td id=\"m_audio_3\">[(xiu1)(lian4)(jie4)(zhong1)]</td><td id=\"m_audio_4\">[(de)(yi4)(xie1)]</td><td id=\"m_audio_5\">[(bu4)(liang2)(xian4)(xiang4)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(gủa)(zai`)(chi:ảng khưa`)(tang- trung-)</td><td id=\"m_yueyin_1\"></td><td id=\"m_yueyin_2\">(yao`)(thán)(tao`)</td><td id=\"m_yueyin_3\">(xi:âu- li:en` chi:ê`)(trung-)</td><td id=\"m_yueyin_4\">(tơ)(y` xi:ê-)</td><td id=\"m_yueyin_5\">(pu` li:áng)(xi:en` xi:ang`)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">我<font color=\"#3b82f6\">在</font>講課<font color=\"#3b82f6\">當中</font></td><td id=\"m_hanzi_1\">,</td><td id=\"m_hanzi_2\">要談到</td><td id=\"m_hanzi_3\">修煉界<font color=\"#3b82f6\">中</font></td><td id=\"m_hanzi_4\"><font color=\"#f97316\">的</font>一些</td><td id=\"m_hanzi_5\">不良現象</td><td id=\"m_hanzi_6\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">wǒ zài jiǎngkè dāngzhōng</td><td id=\"m_pinyin_1\"></td><td id=\"m_pinyin_2\">yào tán dào</td><td id=\"m_pinyin_3\">xiūliànjiè zhōng</td><td id=\"m_pinyin_4\">de yìxiē</td><td id=\"m_pinyin_5\">bùliáng xiànxiàng</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tôi ở trong lúc giảng bài</td><td id=\"m_nghia_1\"></td><td id=\"m_nghia_2\">phải nói đến</td><td id=\"m_nghia_3\">trong tu luyện giới</td><td id=\"m_nghia_4\">về một số</td><td id=\"m_nghia_5\">bất lương hiện tượng</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">tôi </font><font color=\"#3b82f6\">ở trong lúc</font><font color=\"#000000\"> giảng bài, phải nói đến </font><font color=\"#3b82f6\">trong</font><font color=\"#000000\"> tu luyện giới </font><font color=\"#f97316\">về</font><font color=\"#000000\"> một số bất lương hiện tượng.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tại khoá học này tôi muốn đề cập đến một số hiện tượng bất lương trong giới tu luyện.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"我在講課當中","audio":"[(wo3)(zai4)(jiang3)(ke4)(dang1)(zhong1)]","pinyin":"wǒ zài jiǎngkè dāngzhōng","yueyin":"(gủa)(zai`)(chi:ảng khưa`)(tang- trung-)","nghia":"tôi ở trong lúc giảng bài"},{"hanzi":"要談到","audio":"[(yao4)(tan2)(dao4)]","pinyin":"yào tán dào","yueyin":"(yao`)(thán)(tao`)","nghia":"phải nói đến"},{"hanzi":"修煉界中","audio":"[(xiu1)(lian4)(jie4)(zhong1)]","pinyin":"xiūliànjiè zhōng","yueyin":"(xi:âu- li:en` chi:ê`)(trung-)","nghia":"trong tu luyện giới"},{"hanzi":"的一些","audio":"[(de)(yi4)(xie1)]","pinyin":"de yìxiē","yueyin":"(tơ)(y` xi:ê-)","nghia":"về một số"},{"hanzi":"不良現象","audio":"[(bu4)(liang2)(xian4)(xiang4)]","pinyin":"bùliáng xiànxiàng","yueyin":"(pu` li:áng)(xi:en` xi:ang`)","nghia":"bất lương hiện tượng"}]
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