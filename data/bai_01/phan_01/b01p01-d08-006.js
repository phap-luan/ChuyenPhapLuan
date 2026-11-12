/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d08-006",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d08-006)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(xiu1)(lian4)]</td><td id=\"m_audio_1\">[(shi4)(mei2)(you3)]</td><td id=\"m_audio_2\">[(ren4)(he2)(tiao2)(jian4)]</td><td id=\"m_audio_3\">[(de)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(yao4)(xiang3)]</td><td id=\"m_audio_6\">[(xiu1)(lian4)]</td><td id=\"m_audio_7\"></td><td id=\"m_audio_8\">[(na4)(me)(jiu4)]</td><td id=\"m_audio_9\">[(xiu1)(lian4)]</td><td id=\"m_audio_10\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(xi:âu- li:en`)</td><td id=\"m_yueyin_1\">(shi*`)(mấy yẩu)</td><td id=\"m_yueyin_2\">(rân` hứa)(thi:áo chi:en`)</td><td id=\"m_yueyin_3\">(tơ)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(yao`)(xi:ảng)</td><td id=\"m_yueyin_6\">(xi:âu- li:en`)</td><td id=\"m_yueyin_7\"></td><td id=\"m_yueyin_8\">(na` mơ)(chi:âu`)</td><td id=\"m_yueyin_9\">(xi:âu- li:en`)</td><td id=\"m_yueyin_10\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">修煉</td><td id=\"m_hanzi_1\">是沒有</td><td id=\"m_hanzi_2\">任何條件</td><td id=\"m_hanzi_3\"><font color=\"#3b82f6\">的</font></td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">要想</td><td id=\"m_hanzi_6\">修煉</td><td id=\"m_hanzi_7\">,</td><td id=\"m_hanzi_8\">那麼就</td><td id=\"m_hanzi_9\">修煉</td><td id=\"m_hanzi_10\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">xiūliàn</td><td id=\"m_pinyin_1\">shì méiyǒu</td><td id=\"m_pinyin_2\">rènhé tiáojiàn</td><td id=\"m_pinyin_3\">de</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">yào xiǎng</td><td id=\"m_pinyin_6\">xiūliàn</td><td id=\"m_pinyin_7\"></td><td id=\"m_pinyin_8\">nàme jiù</td><td id=\"m_pinyin_9\">xiūliàn</td><td id=\"m_pinyin_10\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">tu luyện</td><td id=\"m_nghia_1\">là không có</td><td id=\"m_nghia_2\">bất kỳ điều kiện</td><td id=\"m_nghia_3\">nào</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">nếu muốn</td><td id=\"m_nghia_6\">tu luyện</td><td id=\"m_nghia_7\"></td><td id=\"m_nghia_8\">vậy thì liền</td><td id=\"m_nghia_9\">tu luyện</td><td id=\"m_nghia_10\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">tu luyện là không có bất kỳ điều kiện </font><font color=\"#3b82f6\">nào</font><font color=\"#000000\">, nếu muốn tu luyện, vậy thì liền tu luyện.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Tu luyện không có điều kiện nào hết; muốn tu luyện, thì tu luyện thôi.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"修煉","audio":"[(xiu1)(lian4)]","pinyin":"xiūliàn","yueyin":"(xi:âu- li:en`)","nghia":"tu luyện"},{"hanzi":"是沒有","audio":"[(shi4)(mei2)(you3)]","pinyin":"shì méiyǒu","yueyin":"(shi*`)(mấy yẩu)","nghia":"là không có"},{"hanzi":"任何條件","audio":"[(ren4)(he2)(tiao2)(jian4)]","pinyin":"rènhé tiáojiàn","yueyin":"(rân` hứa)(thi:áo chi:en`)","nghia":"bất kỳ điều kiện"},{"hanzi":"的","audio":"[(de)]","pinyin":"de","yueyin":"(tơ)","nghia":"trợ từ cuối trong cấu trúc 是…的"},{"hanzi":"要想","audio":"[(yao4)(xiang3)]","pinyin":"yào xiǎng","yueyin":"(yao`)(xi:ảng)","nghia":"nếu muốn"},{"hanzi":"修煉","audio":"[(xiu1)(lian4)]","pinyin":"xiūliàn","yueyin":"(xi:âu- li:en`)","nghia":"tu luyện"},{"hanzi":"那麼就","audio":"[(na4)(me)(jiu4)]","pinyin":"nàme jiù","yueyin":"(na` mơ)(chi:âu`)","nghia":"vậy thì liền"},{"hanzi":"修煉","audio":"[(xiu1)(lian4)]","pinyin":"xiūliàn","yueyin":"(xi:âu- li:en`)","nghia":"tu luyện"}]
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