$(function(){

    function shuffle(){
        var arr = [];
        $('#cards .card').each(function() {
            arr.push($(this).html());
        });
        arr.sort(function() {
            return Math.random() - Math.random();
        });
        $('#cards').empty();
        for(i = 0; i < arr.length; i++) {

             $('#cards').append('<div class="cardOuter"><div class="cardInner">' +'<div class="card">'+ arr[i] + '</div>' + '<div class="cardBack"><img src="card.jpg" alt=""></div></div></div>');
        }
    }
    shuffle();
    
    $.fn.rotate_box = function(){
        var	elm = $(this),
            elm_in = $('.cardInner', this),
            btn = $('.card, .cardBack', elm),
            deg = 0,
            turn = false,
            turn_cls = 'reverse';

    var rotate_anm = function(){
        elm_in.css({
            'transform' : 'rotateY(' + deg * -2 + 'deg)'
        });
    };

        var rotate = function(){
            setTimeout(function(){
                rotate_anm();
                if( deg == 45 ){
                    if( turn === false ){
                        elm.addClass(turn_cls);
                    } else {
                        elm.removeClass(turn_cls);
                    }
                    deg = 315;
                }
                if( deg <= 45 ){
                    deg += 3;
                    rotate();
                } else if( deg < 360 && deg > 45 ) {
                    deg += 3;
                    rotate();
                } else {
                    deg = 0;
                    elm_in.attr('style', '');
                    if( turn === false ){
                        turn = true;
                    } else {
                        turn = false;
                    }
                }
            }, 5);
        };

        btn.click(function(){
            rotate();
        });
    };

    $('.cardOuter').each(function(){
        $(this).rotate_box();
    });
   
});
