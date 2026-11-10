/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p01-d05-008",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p01-d05-008)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zai4)]</td><td id=\"m_audio_1\">[(xiu1)(lian4)]</td><td id=\"m_audio_2\">[(guo4)(cheng2)]</td><td id=\"m_audio_3\">[(zhong1)]</td><td id=\"m_audio_4\"></td><td id=\"m_audio_5\">[(xiu1)(lian4)(zhe3)]</td><td id=\"m_audio_6\">[(chu1)(yu2)]</td><td id=\"m_audio_7\">[(ci2)(bei1)(xin1)]</td><td id=\"m_audio_8\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(zai`)</td><td id=\"m_yueyin_1\">(xi:âu- li:en`)</td><td id=\"m_yueyin_2\">(cua` tr'ấng)</td><td id=\"m_yueyin_3\">(trung-)</td><td id=\"m_yueyin_4\"></td><td id=\"m_yueyin_5\">(xi:âu- li:en` trửa)</td><td id=\"m_yueyin_6\">(tr'u- úy)</td><td id=\"m_yueyin_7\">(s'ứ pây-)(xin-)</td><td id=\"m_yueyin_8\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">在</td><td id=\"m_hanzi_1\">修煉</td><td id=\"m_hanzi_2\">過程</td><td id=\"m_hanzi_3\">中</td><td id=\"m_hanzi_4\">,</td><td id=\"m_hanzi_5\">修煉者</td><td id=\"m_hanzi_6\">出於</td><td id=\"m_hanzi_7\">慈悲心</td><td id=\"m_hanzi_8\">,</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zài</td><td id=\"m_pinyin_1\">xiūliàn</td><td id=\"m_pinyin_2\">guòchéng</td><td id=\"m_pinyin_3\">zhōng</td><td id=\"m_pinyin_4\"></td><td id=\"m_pinyin_5\">xiūliànzhě</td><td id=\"m_pinyin_6\">chūyú</td><td id=\"m_pinyin_7\">cíbēi xīn</td><td id=\"m_pinyin_8\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">ở</td><td id=\"m_nghia_1\">tu luyện</td><td id=\"m_nghia_2\">quá trình</td><td id=\"m_nghia_3\">trong</td><td id=\"m_nghia_4\"></td><td id=\"m_nghia_5\">người tu luyện</td><td id=\"m_nghia_6\">xuất phát từ</td><td id=\"m_nghia_7\">từ bi tâm</td><td id=\"m_nghia_8\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><font color=\"#000000\"><b>ở tu luyện quá trình trong, người tu luyện xuất phát từ từ bi tâm,</b></font></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">Trong quá trình tu luyện, người tu luyện xuất phát từ tâm từ bi</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"在","audio":"[(zai4)]","pinyin":"zài","yueyin":"(zai`)","nghia":"tại, ở"},{"hanzi":"修煉","audio":"[(xiu1)(lian4)]","pinyin":"xiūliàn","yueyin":"(xi:âu- li:en`)","nghia":"tu luyện"},{"hanzi":"過程","audio":"[(guo4)(cheng2)]","pinyin":"guòchéng","yueyin":"(cua` tr'ấng)","nghia":"quá trình"},{"hanzi":"中","audio":"[(zhong1)]","pinyin":"zhōng","yueyin":"(trung-)","nghia":"trong (在…中)"},{"hanzi":"修煉者","audio":"[(xiu1)(lian4)(zhe3)]","pinyin":"xiūliànzhě","yueyin":"(xi:âu- li:en` trửa)","nghia":"người tu luyện"},{"hanzi":"出於","audio":"[(chu1)(yu2)]","pinyin":"chūyú","yueyin":"(tr'u- úy)","nghia":"xuất phát từ"},{"hanzi":"慈悲心","audio":"[(ci2)(bei1)(xin1)]","pinyin":"cíbēi xīn","yueyin":"(s'ứ pây-)(xin-)","nghia":"từ bi tâm"}]
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