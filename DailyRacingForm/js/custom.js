$(document).ready(function() {
$(".tabs").hide();
$(".tabs:first").show();
$(".tabMenu li a").click(function () {
var tablink = $(this).attr('href');
$(".tabs").hide();
$(tablink).show();
$(this).parents(".tabMenu").find('li').removeClass("active");
$(this).parents(".tabMenu li").addClass("active");
return false;
});
$("#flip").click(function(){
$("#panel").slideToggle();
});
});