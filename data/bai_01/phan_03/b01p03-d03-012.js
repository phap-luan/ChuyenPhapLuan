/* Exported Rich Text & Table Data */
(function() {
  window.RENDER_PAYLOAD = {
    cau_id: "b01p03-d03-012",
    editorHtml: "<div style=\"margin-bottom: 12px; line-height: 1.5\">\n        <p>\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Nguyên Văn:</span> [(b01p03-d03-012)]<br>\n          <span id=\"matrixTableWrapper\"><table class=\"matrix-table\"><tbody><tr class=\"row-audio\"><td id=\"m_audio_0\">[(zhe4)(shi4)]</td><td id=\"m_audio_1\">[(wu4)(zhi4)(cun2)(zai4)]</td><td id=\"m_audio_2\">[(de)(yi4)(fang1)(mian4)]</td><td id=\"m_audio_3\"></td><td id=\"m_audio_4\">[(ke3)(shi4)(tong2)(shi2)]</td><td id=\"m_audio_5\">[(ta1)(ye3)(cun2)(zai4)(zhe)]</td><td id=\"m_audio_6\">[(zhen1)(shan4)(ren3)(te4)(xing4)]</td><td id=\"m_audio_7\"></td></tr><tr class=\"row-yueyin\"><td id=\"m_yueyin_0\">(trưa`)(shi*`)</td><td id=\"m_yueyin_1\">(u` tri*`)(s'uấn zai`)</td><td id=\"m_yueyin_2\">(tơ)(y`)(fang- mi:en`)</td><td id=\"m_yueyin_3\"></td><td id=\"m_yueyin_4\">(khửa shi*`)(thúng shí*)</td><td id=\"m_yueyin_5\">(tha-)(yể)(s'uấn zai` trơ)</td><td id=\"m_yueyin_6\">(trân-)(shan`)(rẩn)(thưa` xing`)</td><td id=\"m_yueyin_7\"></td></tr><tr class=\"row-hanzi\"><td id=\"m_hanzi_0\">這是</td><td id=\"m_hanzi_1\">物質存在</td><td id=\"m_hanzi_2\">的一方面</td><td id=\"m_hanzi_3\">;</td><td id=\"m_hanzi_4\">可是同時</td><td id=\"m_hanzi_5\">它也存在<font color=\"#ec4899\">著</font></td><td id=\"m_hanzi_6\">真、善、忍特性</td><td id=\"m_hanzi_7\">。</td></tr><tr class=\"row-pinyin\"><td id=\"m_pinyin_0\">zhè shì</td><td id=\"m_pinyin_1\">wùzhì cúnzài</td><td id=\"m_pinyin_2\">de yì fāngmiàn</td><td id=\"m_pinyin_3\"></td><td id=\"m_pinyin_4\">kěshì tóngshí</td><td id=\"m_pinyin_5\">tā yě cúnzàizhe</td><td id=\"m_pinyin_6\">zhēn, shàn, rěn tèxìng</td><td id=\"m_pinyin_7\"></td></tr><tr class=\"row-nghia\"><td id=\"m_nghia_0\">đây là</td><td id=\"m_nghia_1\">vật chất tồn tại</td><td id=\"m_nghia_2\">về một phương diện</td><td id=\"m_nghia_3\"></td><td id=\"m_nghia_4\">nhưng đồng thời</td><td id=\"m_nghia_5\">nó cũng<font color=\"#ec4899\"> đan</font>g tồn tại</td><td id=\"m_nghia_6\">Chân, Thiện, Nhẫn đặc tính</td><td id=\"m_nghia_7\"></td></tr></tbody></table><br></span><span style=\"color: rgb(100, 116, 139); font-size: 10px; font-weight: bold;\">Tạm Dịch:</span></p><p style=\"margin-top: 0px;\"><b style=\"\"><font color=\"#000000\">đây là vật chất tồn tại về một phương diện; nhưng đồng thời nó cũng </font><font color=\"#ec4899\">đang</font><font color=\"#000000\"> tồn tại Chân, Thiện, Nhẫn đặc tính.</font></b></p>\n        <p style=\"margin-top: 5px;\">\n          <span style=\"font-size: 10px; font-weight: bold; color: #64748b;\"> Bản dịch trong sách:</span><br>\n          <span style=\"font-size: 16px; font-weight: bold; color: #000000;\">[tất cả những thứ ấy] chúng đều có phương diện tồn tại vật chất; đồng thời chúng cũng có tồn tại đặc tính Chân-Thiện-Nhẫn.</span>\n        </p>\n      </div>",
    tableData: [{"hanzi":"這是","audio":"[(zhe4)(shi4)]","pinyin":"zhè shì","yueyin":"(trưa`)(shi*`)","nghia":"đây là"},{"hanzi":"物質存在","audio":"[(wu4)(zhi4)(cun2)(zai4)]","pinyin":"wùzhì cúnzài","yueyin":"(u` tri*`)(s'uấn zai`)","nghia":"vật chất tồn tại"},{"hanzi":"的一方面","audio":"[(de)(yi4)(fang1)(mian4)]","pinyin":"de yì fāngmiàn","yueyin":"(tơ)(y`)(fang- mi:en`)","nghia":"về một phương diện"},{"hanzi":"可是同時","audio":"[(ke3)(shi4)(tong2)(shi2)]","pinyin":"kěshì tóngshí","yueyin":"(khửa shi*`)(thúng shí*)","nghia":"nhưng đồng thời"},{"hanzi":"它也存在著","audio":"[(ta1)(ye3)(cun2)(zai4)(zhe)]","pinyin":"tā yě cúnzàizhe","yueyin":"(tha-)(yể)(s'uấn zai` trơ)","nghia":"nó cũng đang tồn tại"},{"hanzi":"真、善、忍特性","audio":"[(zhen1)(shan4)(ren3)(te4)(xing4)]","pinyin":"zhēn, shàn, rěn tèxìng","yueyin":"(trân-)(shan`)(rẩn)(thưa` xing`)","nghia":"Chân, Thiện, Nhẫn đặc tính"}]
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