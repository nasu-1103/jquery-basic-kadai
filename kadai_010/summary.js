$(function () {
  // 文字色を青に変更する
  $('#change-color').on('click', function (){
    $('#target').css('color', 'blue');
  });

  // 文字内容を変更する
  $('#change-text').on('click', function (){
    $('#target').css('color', 'blue');
    $('#target').text('Hello!');
  });

  // 文字をフェードアウトする
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });

  // 文字をフェードインさせる
  $('#fade-in').on('click', function () {
    $('#target').css('color', 'blue');
    $('#target').fadeIn();
  });
});