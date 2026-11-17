/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p02-d02-004",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p02-d02-004)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(jiu4)(xiang4)]</td><td id=\"m_audio_1\">[(ni3)(shang4)(xue2)]</td><td id=\"m_audio_2\"></td><td id=\"m_audio_3\">[(ni3)(na2)]</td><td id=\"m_audio_4\">[(xiao3)(xue2)(ke4)(ben3)]</td><td id=\"m_audio_5\">[(qu4)(shang4)(da4)(xue2)]</td><td id=\"m_audio_6\"></td><td id=\"m_audio_7\">[(ni3)(hai2)(shi4)]</td><td id=\"m_audio_8\">[(ge4)(xiao3)(xue2)(sheng1)]</td><td id=\"m_audio_9\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(chi:âu`)(xi:ang`)</td><td id=\"m_yueyin_1\">(nỉ)(shang` xuế)</td><td id=\"m_yueyin_2\"></td><td id=\"m_yueyin_3\">(nỉ)(ná)</td><td id=\"m_yueyin_4\">(xi:ảo xuế)(khưa` pẩn)</td><td id=\"m_yueyin_5\">(ch'uy`)(shang`)(ta` xuế)</td><td id=\"m_yueyin_6\"></td><td id=\"m_yueyin_7\">(nỉ)(hái)(shi*`)</td><td id=\"m_yueyin_8\">(cưa`)(xi:ảo xuế shâng-)</td><td id=\"m_yueyin_9\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">就像</td><td id=\"m_hanzi_1\">你上學</td><td id=\"m_hanzi_2\">,</td><td id=\"m_hanzi_3\">你拿</td><td id=\"m_hanzi_4\">小學課本</td><td id=\"m_hanzi_5\">去上大學</td><td id=\"m_hanzi_6\">,</td><td id=\"m_hanzi_7\">你還是</td><td id=\"m_hanzi_8\">個小學生</td><td id=\"m_hanzi_9\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">jiù xiàng</td><td id=\"m_pinyin_1\">nǐ shàngxué</td><td id=\"m_pinyin_2\"></td><td id=\"m_pinyin_3\">nǐ ná</td><td id=\"m_pinyin_4\">xiǎoxué kèběn</td><td id=\"m_pinyin_5\">qù shàng dàxué</td><td id=\"m_pinyin_6\"></td><td id=\"m_pinyin_7\">nǐ hái shì</td><td id=\"m_pinyin_8\">gè xiǎoxuéshēng</td><td id=\"m_pinyin_9\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">giống như</td><td id=\"m_nghia_1\">bạn đi học</td><td id=\"m_nghia_2\"></td><td id=\"m_nghia_3\">bạn cầm</td><td id=\"m_nghia_4\">tiểu học khóa bản</td><td id=\"m_nghia_5\">đi lên đại học</td><td id=\"m_nghia_6\"></td><td id=\"m_nghia_7\">bạn vẫn là</td><td id=\"m_nghia_8\">một tiểu học sinh</td><td id=\"m_nghia_9\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>giống như bạn đi học, bạn cầm tiểu học khóa bản đi lên đại, học bạn vẫn là một tiểu học sinh.</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Ví như chư vị đi học, chư vị mang sách giáo khoa tiểu học mà đến đại học, [thì] chư vị vẫn chỉ là học sinh tiểu học.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"就像","audio":"[(jiu4)(xiang4)]","pinyin":"jiù xiàng","yueyin":"(chi:âu`)(xi:ang`)","nghia":"giống như"},{"hanzi":"你上學","audio":"[(ni3)(shang4)(xue2)]","pinyin":"nǐ shàngxué","yueyin":"(nỉ)(shang` xuế)","nghia":"bạn đi học (ngữ cảnh này, 上 = đi)"},{"hanzi":"你拿","audio":"[(ni3)(na2)]","pinyin":"nǐ ná","yueyin":"(nỉ)(ná)","nghia":"bạn cầm"},{"hanzi":"小學課本","audio":"[(xiao3)(xue2)(ke4)(ben3)]","pinyin":"xiǎoxué kèběn","yueyin":"(xi:ảo xuế)(khưa` pẩn)","nghia":"tiểu học khóa bản (sách giáo khoa)"},{"hanzi":"去上大學","audio":"[(qu4)(shang4)(da4)(xue2)]","pinyin":"qù shàng dàxué","yueyin":"(ch'uy`)(shang`)(ta` xuế)","nghia":"đi lên đại học"},{"hanzi":"你還是","audio":"[(ni3)(hai2)(shi4)]","pinyin":"nǐ hái shì","yueyin":"(nỉ)(hái)(shi*`)","nghia":"bạn vẫn là"},{"hanzi":"個小學生","audio":"[(ge4)(xiao3)(xue2)(sheng1)]","pinyin":"gè xiǎoxuéshēng","yueyin":"(cưa`)(xi:ảo xuế shâng-)","nghia":"một tiểu học sinh"}]
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