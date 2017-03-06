$("#Go").on('click',function(){
    var input = $('.input').val();
    if (input == ""){
        input = "March 10 1996";
    }
    //console.log(input);
    var href = window.location.href;
    var URL = href + input;
    window.location.href = URL;
});

