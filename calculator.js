/*
var calculator = 
{
	var sum = 0,
	total:function(){return sum;},
	
}
*/
$(document).ready(function() {
    var sum = 0;
    //Displays button value on calculator display
    $(".num").click(function() {
        var number = $(this).text();
        sum += number;
        $("#display").append($(this).text());
    });

    //All Clear function
    $("#AC").click(function() {
        $("#display").empty();
    });

    //Equal function
    $("#equal").click(function() {
        $("#display").empty();
        $("#display").append(sum);
    });
});
