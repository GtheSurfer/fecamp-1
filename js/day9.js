jQuery (function ($) {
//    $('#box').on('mousedown', function (event){
//        $(this).text(event.which).css('background-color','red');
//    });
    
//    $('a').on('click', function (event) {
//        event.preventDefault();
//        console.log('클릭');
//    })
//    
//    $(document).on('keydown', function (event){
//        var $box = $('#box');
//        switch ( event.which ) {
//            case 37:
//                $box.css('left', '-=5px' );
//                break;
//            case 38:
//                $box.css('top', '-=5px' );
//                break;
//            case 39:
//                $box.css('left', '+=5px' );
//                break;
//            case 40:
//                $box.css('top', '+=5px' );
//                break;
//        } 
//        if ( event.which === 37) {
//            $box.css('left', '-=5px' );
//        } else if ( event.which === 38 ){
//            $box.css('top', '-=5px' );
//        } else if ( event.which === 39 ){
//            $box.css('left', '+=5px' );
//        } else if ( event.which === 40) {
//            $box.css('top', '+=5px' );
//        } else {
//            $box.text('press arrow key');
//        }
//    })
//    
    $('.draggable').on('mousedown', function (event){
        event.preventDefault();
        
        var startX = event.pageX, startY = event.pageY;
        
        var $this = $(this);
        var startLeft = parseInt($this.css('left'));
        var startTop = parseInt($this.css('top'));
        
        if (isNaN(startLeft)) startLeft = 0;
        if (isNaN(startTop)) startTop = 0;
        var position = $this.css('position');
        if (position != 'absolut' && position != 'relative' && position != 'fixed') {
            $this.css('position', 'relative');
        }
        
        $(document).on('mousemove.dragndrop', function (event){
           //moved distance
            var x = event.pageX - startX, y = event.pageY - startY;
            $this.css('left', startLeft + x ).css('top', startTop + y ).css('opacity', 0.5);
            
            
        });
        
        $(document).on('mouseup.dragndrop', function(event){
            if (event.shiftKey) {
                $this.css('left', startLeft).css('top', startTop ).css('opacity',1);
                $(document).off('.dragndrop');    
            } else {
                $this.css('opacity',1);
                $(document).off('.dragndrop').css('opacity',1);
            };
        }); 
    });
    
    
    
//        $('.size-handle').on('mousedown', function (event){
//            event.preventDefault();
//            
//            var $this = $('#box');
//            var startX = event.pageX, startY = event.pageY;
//            var startW = parseInt($this.css('width')), startH = parseInt($this.css('height'));
//            
//            $(document).on('mousemove.a', function (event){
//                var x = event.pageX - startX, y = event.pageY - startY;
//                $this.css('background','blue').css('opacity','0.5').css('width', startW + x).css('height', startH + y);
//            });
//            
//            $(document).on('mouseup.a', function (event){
//                $(document).off('.a');
//                $this.css('opacity','1').css('background','#ccc');
//            }); 
//        });
    
    
    
    
    
});
