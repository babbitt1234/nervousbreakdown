$(function () {

    var cl = console.log;
    var arr = [];
    var cardNum;
    var cardNum2;
    var cardId;
    var cardId2;
    var carddis;
    var cardDis2;
    var timer;
    var pair = 0;
    var count = 0;
    var clickNum = 0;

    $('.board .card').prop("disabled", true);

    function shuffle() {
        $('.board .card').each(function () {
            arr.push($(this).html());
        });

        arr.sort(function () {
            return Math.random() - Math.random();
        });

        $('.board').empty();
        for (i = 0; i < arr.length; i++) {
            $('.board').append(
                '<div class="card">'
                + arr[i]
                + '</div>');
        }
    }
    shuffle();

    $('.card1_1').mousedown(function () {
        $(this).attr("src", "img/card1.jpg");
    });

    $('.card1_2').mousedown(function () {
        $(this).attr("src", "img/card1.jpg");
    });

    $('.card2_1').mousedown(function () {
        $(this).attr("src", "img/card2.jpg");
    });

    $('.card2_2').mousedown(function () {
        $(this).attr("src", "img/card2.jpg");
    });

    $('.card3_1').mousedown(function () {
        $(this).attr("src", "img/card3.jpg");
    });

    $('.card3_2').mousedown(function () {
        $(this).attr("src", "img/card3.jpg");
    });

    $('.card4_1').mousedown(function () {
        $(this).attr("src", "img/card4.jpg");
    });

    $('.card4_2').mousedown(function () {
        $(this).attr("src", "img/card4.jpg");
    });

    $('.card5_1').mousedown(function () {
        $(this).attr("src", "img/card5.jpg");
    });

    $('.card5_2').mousedown(function () {
        $(this).attr("src", "img/card5.jpg");
    });

    $('.card6_1').mousedown(function () {
        $(this).attr("src", "img/card6.jpg");
    });

    $('.card6_2').mousedown(function () {
        $(this).attr("src", "img/card6.jpg");
    });

    $('.card7_1').mousedown(function () {
        $(this).attr("src", "img/card7.jpg");
    });

    $('.card7_2').mousedown(function () {
        $(this).attr("src", "img/card7.jpg");
    });

    $('.card8_1').mousedown(function () {
        $(this).attr("src", "img/card8.jpg");
    });

    $('.card8_2').mousedown(function () {
        $(this).attr("src", "img/card8.jpg");
    });

    $('.card').click(function () {
        if (clickNum == 0) {
            cardNum = $(this).children('img').attr('src');
            cardId = $(this).children('img').attr('class');
            cardDis = $(this).css('pointer-events', 'none');
            clickNum++;
        } else {
            cardNum2 = $(this).children('img').attr('src');
            cardId2 = $(this).children('img').attr('class');
            cardDis2 = $(this).css('pointer-events', 'none');
            clickNum = 0;
            if (cardNum == cardNum2) {
                cardNum = '';
                cardNUm2 = '';
                cardId = '';
                cardId2 = '';
                pair++;
                if(pair ==  8){
                    $("#bgm").get(0).pause();
                    alert('clear!');
                    clearInterval(timer);
                    return false;
                }else{
                    alert('good!');
                }
            } else {
                $('.' + cardId).attr("src", "img/card100.jpg");
                $('.' + cardId2).attr("src", "img/card100.jpg");
                cardNum = '';
                cardNUm2 = '';
                cardId = '';
                cardId2 = '';
                $(cardDis).css('pointer-events', 'auto');
                $(cardDis2).css('pointer-events', 'auto');
                cardDis = '';
                cardDis2 = '';
            }
        }
    });

    function countShow() {
        count++;
        var msg = 'time: ' + count + ' sec';
        $('#timer').html(msg);
        cl(msg);
    }

    function countUp() {
        timer = setInterval(countShow, 1000);
    }
    
    $('.start').on('click', function () {
        countUp();
        $('.card').css('pointer-events', 'auto');
        $("#bgm").get(0).play();
    });

 

});

