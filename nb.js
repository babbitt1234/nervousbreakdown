$(function(){
    
    var cl = console.log;
    var arr = [];
    var cardNum;
    var cardNum2;
    var cardId;
    var cardId2;
    var clickNum = 0;
    
    function shuffle(){
        $('.board .card').each(function() {
            arr.push($(this).html());
        });
        
        arr.sort(function() {
            return Math.random() - Math.random();
        });
        
        $('.board').empty();
        for(i = 0; i < arr.length; i++) {
             $('.board').append(
                 '<div class="card">'
                 + arr[i]
                 + '</div>');
        }
    }
    shuffle();
    
    $('.card1_1').mousedown(function(){
        $(this).attr("src", "img/card1.jpg");
    });
    
    $('.card1_2').mousedown(function(){
        $(this).attr("src", "img/card1.jpg");
    });
    
    $('.card2_1').mousedown(function(){
        $(this).attr("src", "img/card2.jpg");
    });
    
    $('.card2_2').mousedown(function(){
        $(this).attr("src", "img/card2.jpg");
    });
    
    $('.card3_1').mousedown(function(){
        $(this).attr("src", "img/card3.jpg");
    });
    
    $('.card3_2').mousedown(function(){
        $(this).attr("src", "img/card3.jpg");
    });
    
    $('.card4_1').mousedown(function(){
        $(this).attr("src", "img/card4.jpg");
    });
    
    $('.card4_2').mousedown(function(){
        $(this).attr("src", "img/card4.jpg");
    });
    
    $('.card5_1').mousedown(function(){
        $(this).attr("src", "img/card5.jpg");
    });
    
    $('.card5_2').mousedown(function(){
        $(this).attr("src", "img/card5.jpg");
    });
    
    $('.card6_1').mousedown(function(){
        $(this).attr("src", "img/card6.jpg");
    });
    
    $('.card6_2').mousedown(function(){
        $(this).attr("src", "img/card6.jpg");
    });
    
    $('.card7_1').mousedown(function(){
        $(this).attr("src", "img/card7.jpg");
    });
    
    $('.card7_2').mousedown(function(){
        $(this).attr("src", "img/card7.jpg");
    });
    
    $('.card8_1').mousedown(function(){
        $(this).attr("src", "img/card8.jpg");
    });
    
    $('.card8_2').mousedown(function(){
        $(this).attr("src", "img/card8.jpg");
    });
    
    $('.card').click(function(){
        if(clickNum == 0){
            cardNum = $(this).children('img').attr('src');
            cardId = $(this).children('img').attr('class');
            cl(cardId);
            clickNum++;
        }else{
            cardNum2 = $(this).children('img').attr('src');
            cardId2 = $(this).children('img').attr('class');
            cl(cardId2);
            clickNum = 0;
            if(cardNum == cardNum2){
                alert('good');
                cardNum = '';
                cardNUm2 = '';
                cardId = '';
                cardId2 = '';
            }else{
                $('.' + cardId).attr("src", "img/card100.jpg");
                $('.' + cardId2).attr("src", "img/card100.jpg");
                cardNum = '';
                cardNUm2 = '';
                cardId = '';
                cardId2 = '';
            }
           
        }
    });
        
});

