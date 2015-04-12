jQuery(function($){
    var $box = $('#box');
    
//박스를 숨기고 나타나게 하는 버튼
    $('#hide').on('click',function (event){
        $($box).delay(1000).hide(300);
    });
    $('#show').on('click',function (event){
        $($box).show(300);
    });
    $('#toggle').on('click',function (event){
        $($box).toggle(300);
    });
    
//화살표키를 누르면 박스가 이동. 지정된 영역 안에서만 움직인다.
    $(document).on('keydown', function (event){
        
        var left, top, areaWidth, areaHeight;
            left = parseInt($('#box').css('left'));
            top = parseInt($('#box').css('top'));
            areaWidth = $(window).width() - $box.width() ;
            areaHeight = $('h2:first').offset().top - $box.height() ;
        
        switch ( event.which ) {
            case 37:
                event.preventDefault();
                if ( left - 50 < 0 ){
                    left = 0;
                } else {
                    left = left - 50;
                }
                $box.animate( {'left': left },300);
                break;
            case 38:
                event.preventDefault();
                if ( top - 50 < 0 ){
                    top = 0;
                } else {
                    top = top - 50;
                }
                $box.animate( {'top': top },300 );
                break;
            case 39:
                event.preventDefault();
                if ( left + 100 > areaWidth ){
                    left = areaWidth;
                } else {
                    left = left + 100;
                }
                $box.animate( {'left': left },300);
                break;
            case 40:
                event.preventDefault();
                if ( top + 50 > areaHeight) {
                    top = areaHeight;
                } else {
                    top = top + 50;
                }
                $box.animate( {'top': top },300);
                break;
        }
    });

//top버튼을 누르면 화면이 최상단으로 스크롤 되게
    $('.top').on('click', function (event){
        event.preventDefault();
        $('html,body').animate({scrollTop: 0}, 200);
    });
    
//외부로 연결되는 하이퍼텍스트 옆에 아이콘을 붙이기
    $('a[href^="http:"]').append('<i class="fa fa-external-link"></i>').attr('target','_blank');
    
//탭을 구현
    $('#tab .tabs').on('click', 'li a', function (event){
        var $this = $(this);
        
        event.preventDefault();
        $this.parent('li').siblings().removeClass('active').end().addClass('active');
        
        var tabId = $this.attr('href');
        $(tabId).addClass('active').siblings().removeClass('active');
//        $this.
//            parents('.tabs').next().children(tabNum).addClass('active').siblings().removeClass('active');
    });
});