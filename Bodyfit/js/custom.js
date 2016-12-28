$(document).ready(function(){
$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
$(".equiments").colorbox({rel:'equiptments'});
$(".equimentsa").colorbox({rel:'equiptmentsa'});
$(".equimentsc").colorbox({rel:'equiptmentsc'});
$(".equimentsd").colorbox({rel:'equiptmentsd'});
$("#click").click(function(){ 
$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
return false;
});
});