$(function(){
    
    var arr = [];
    $('ul li').each(function() {
        arr.push($(this).html());
    });
    arr.sort(function() {
        return Math.random() - Math.random();
    });
    $('ul').empty();
    for(i = 0; i < arr.length; i++) {
        $('ul').append('<li class="card card' + arr[i] + '">' + arr[i] + '</li>');
    }
        

    $('.card').click(function(){
        $('li').css('backgroundColor', 'white');
    });
    
    
    
    
    
    
    
//----------------------ゴミ箱---------------------------
//    function shuffle(){
//        var box = [];
//        $('.card').each(function() {
//            box.push($(this).html());
//        });
//        box.sort(function() {
//            return Math.random() - Math.random();
//        });
//        $('.card').empty();
//         
//        i = 0;
//        $('.card').each(function() {
//            $(this).append(box[i]);
//            i++;
//        });
//    }
//    shuffle();    
    
    
    
});
