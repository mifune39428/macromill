//ヘッダー
var _window = $(window),
    _header = $('.site-header'),
    heroBottom;
 
_window.on('scroll',function(){
    heroBottom = $('.hero').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');   
    }
    else{
        _header.removeClass('transform');   
    }
});
 
_window.trigger('scroll');
//ここまでヘッダー

//トップ画像フェードイン
$('.fadein-top-img').hide().fadeIn(900);

//ロゴフェードイン
$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
          }
    });
});

//下からフェードイン
$(window).scroll(function (){
    $('.fadein-bottom').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
          }
    });
});
