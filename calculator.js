// Further improvements: allow users to switch operators if a number does not succeed it
$(document).ready(function() {
    var sum;
    //Remove initial 0 if a number greater than 0 is inputted
    var count = 0;
    var id;
    var lastNumInput;
    $(".num").click(function() {
        //Condition for first input and is a not 0
        if (($(this).text()) > 0 && count < 1) {
            $("#bot-display").empty();
            $("#bot-display").append($(this).text());
            count++;
            //Prevents multiple input of 0s if zero is the first and only value
            lastNumInput = Number($("#bot-display").text());
        } else if (($(this).text()) === '0' && count < 1) {
            count = 0;
        } else {
            $("#bot-display").append($(this).text());
            lastNumInput = Number($("#bot-display").text());

        }
    });

    //All Clear function - reset sum, count, and display
    $("#AC").click(function() {
        $("#bot-display").empty();
        $("#top-display").empty();
        $("#bot-display").append('0');
        sum = 0;
        count = 0;
    });

    //Equal function
    $("#equal").click(function() {
        var current = Number($("#bot-display").text());
        if (id == 'plus') {
            sum += lastNumInput;
        }
        if (id == 'minus') {
            sum -= lastNumInput;
        }
        if (id == 'multiply') {
            sum = sum * lastNumInput;
        }
        if (id == 'divide') {
            sum = lastNumInput / sum;
        }
        $("#bot-display").empty();
        $("#top-display").empty();
        $("#bot-display").append(sum);

    });

    //Operator function
    $(".op").click(function() {
        var current;
        id = this.id;
        if (id == 'plus') {
            current = Number($("#bot-display").text());
            sum = current;
            $("#top-display").append(current + ' ' + '+');
            count = 0;
            lastNumInput = 0;
        }
        if (id == 'minus') {
            current = Number($("#bot-display").text());
            sum = current;
            $("#top-display").append(current + ' ' + '-');
            count = 0;
            lastNumInput = 0;

        }
        if (id == 'multiply') {
            current = Number($("#bot-display").text());
            sum = current;
            $("#top-display").append(current + ' ' + '*');
            count = 0;
            lastNumInput = 0;

        }
        if (id == 'divide') {
            current = Number($("#bot-display").text());
            sum = current;
            $("#top-display").append(current + ' ' + '/');
            count = 0;
            lastNumInput = 0;

        }
        lastNumInput = 0;
    });
});
