$(function () {
  $('.tabContainer').eq(0).prepend('\
    <div style="\
        border: 5px solid #3187ac;\
        padding: 25px;\
        max-width: 550px;\
        margin: 0 auto 50px;">\
      <p style="\
        font-weight: bold;\
        text-align: center;\
        margin-bottom: 1em;">自動入力</p>\
      <table>\
        <tbody><tr>\
          <th width="100">開始</th>\
          <td><input type="text" class="autofill_time" data-key="start_time" placeholder="10:00" value="10:00"></td>\
        </tr>\
        <tr>\
          <th>終了</th>\
          <td><input type="text" class="autofill_time" data-key="end_time" placeholder="19:00" value="19:00"></td>\
        </tr>\
        <tr>\
          <th>休憩</th>\
          <td><input type="text" class="autofill_time" data-key="relax_time" placeholder="1:00" value="1:00"></td>\
        </tr>\
        <tr>\
          <th>休日</th>\
          <td class="autofill_holiday">\
            <label><input type="checkbox" value="月">月</label>&nbsp;\
            <label><input type="checkbox" value="火">火</label>&nbsp;\
            <label><input type="checkbox" value="水">水</label>&nbsp;\
            <label><input type="checkbox" value="木">木</label>&nbsp;\
            <label><input type="checkbox" value="金">金</label>&nbsp;\
            <label><input type="checkbox" value="土" checked>土</label>&nbsp;\
            <label><input type="checkbox" value="日" checked>日</label>\
          </td>\
        </tr>\
      </tbody></table>\
      <div style="\
        text-align: center;">\
        <span class="autofill_button" style="\
        background: #3186ab;\
        padding: 10px 20px;\
        color: #fff;\
        cursor: pointer;">自動入力</span><br>\
        <span style="font-size: 12px;margin-top: 15px;display: block;">※勝手に報告や保存をされることはありません。</span>\
      </div>\
    </div>');

  $('.autofill_button').click(function () {
    $('.autofill_time').each(function () {
      $('.reportDetail__txt input[name*="' + $(this).data('key') + '"]').val($(this).val());
    });

    // 休日の入力を空にする
    $($('.autofill_holiday input:checked').map(function () {
      return ".txtNormal:contains(（" + $(this).val() + "）)";
    }).get().join(',')).closest('tr').find('input[type="text"]').val('');

    // 作業時間の計算を走らせる
    $('input[name*="relax_time"]').focus();
  });
});
