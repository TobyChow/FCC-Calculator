$(document).ready(function() {
    var sum = 0;
    //Remove initial 0 if a number greater than 0 is inputted
    var count = 0;
    $(".num").click(function() {
        //Display input if first input is not 0
        if (($(this).text()) > 0 && count < 1) {
            $("#bot-display").empty();
            $("#bot-display").append($(this).text());
            //update sum 
            var number = Number($(this).text());
            sum += number;
            count++;
            //Prevents multiple input of 0s if zero is the first and only value
        } else if (($(this).text()) === '0' && count < 1) {
            count = 0;
        } else {
            $("#bot-display").append($(this).text());
        }
    });

    //All Clear function
    $("#AC").click(function() {
        $("#bot-display").empty();
        $("#top-display").empty();
        $("#bot-display").append('0');
        count = 0;
    });

    //Equal function
    $("#equal").click(function() {
        $("#bot-display").empty();
        $("#bot-display").append(sum);
    });
});
