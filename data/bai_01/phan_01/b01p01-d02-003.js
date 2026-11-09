/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d02-003",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d02-003)]<br>\n          <span id=\"matrixTableWrapper\"></span></p><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(bao3)(zheng4)]</td><td id=\"m_audio_1\">[(ni3)]</td><td id=\"m_audio_2\">[(zai4)]</td><td id=\"m_audio_3\">[(jin1)(hou4)]</td><td id=\"m_audio_4\">[(neng2)(gou4)]</td><td id=\"m_audio_5\">[(xiu1)(lian4)]</td><td id=\"m_audio_6\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(pảo trâng`)</td><td id=\"m_yueyin_1\">(nỉ)</td><td id=\"m_yueyin_2\">(zai`)</td><td id=\"m_yueyin_3\">(chin- hâu`)</td><td id=\"m_yueyin_4\">(nấng câu`)</td><td id=\"m_yueyin_5\">(xi:âu- li:en`)</td><td id=\"m_yueyin_6\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">保證</td><td id=\"m_hanzi_1\">你</td><td id=\"m_hanzi_2\">在</td><td id=\"m_hanzi_3\">今後</td><td id=\"m_hanzi_4\">能夠</td><td id=\"m_hanzi_5\">修煉</td><td id=\"m_hanzi_6\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">bǎozhèng</td><td id=\"m_pinyin_1\">nǐ</td><td id=\"m_pinyin_2\">zài</td><td id=\"m_pinyin_3\">jīnhòu</td><td id=\"m_pinyin_4\">nénggòu</td><td id=\"m_pinyin_5\">xiūliàn</td><td id=\"m_pinyin_6\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">bảo đảm</td><td id=\"m_nghia_1\">bạn</td><td id=\"m_nghia_2\">ở</td><td id=\"m_nghia_3\">nay sau</td><td id=\"m_nghia_4\">có thể đủ</td><td id=\"m_nghia_5\">tu luyện</td><td id=\"m_nghia_6\"></td></tr></tbody></table><br><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span><p></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>bảo đảm bạn ở nay sau có thể đủ tu luyện,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">đảm bảo từ nay trở đi chư vị có thể tu luyện;</span></p>\n      </div>",
    tableData: [{"hanzi":"保證","audio":"[(bao3)(zheng4)]","pinyin":"bǎozhèng","yueyin":"(pảo trâng`)","nghia":"bảo đảm"},{"hanzi":"你","audio":"[(ni3)]","pinyin":"nǐ","yueyin":"(nỉ)","nghia":"bạn"},{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"ở, tại (giới từ chỉ thời điểm)"},{"hanzi":"今後","audio":"[(jin1)(hou4)]","pinyin":"jīnhòu","yueyin":"(chin- hâu`)","nghia":"nay sau: hiện nay và về sau"},{"hanzi":"能夠","audio":"[(neng2)(gou4)]","pinyin":"nénggòu","yueyin":"(nấng câu`)","nghia":"có thể đủ"},{"hanzi":"修煉","audio":"[(xiu1)(lian4)]","pinyin":"xiūliàn","yueyin":"(xi:âu- li:en`)","nghia":"tu luyện"}]
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