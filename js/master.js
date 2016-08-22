$("document").ready(function(){
    $(".selectwrapper").on('click', function(){
        $(this).find(".carboxgrid").slideToggle();

});

var slider = document.getElementById("slider");
$(".timeresult").text(slider.value + " Year(s)");
$("#slider").on('mouseup', function(){
    $(".timeresult").text(slider.value + " Year(s)");

});
});
