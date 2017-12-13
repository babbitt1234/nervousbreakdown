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
//        $('.card').css('visibility','hidden');
    }
    shuffle();

});
