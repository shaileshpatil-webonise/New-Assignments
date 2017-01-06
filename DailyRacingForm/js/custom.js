$(document).ready(function() {
$(".tabs").hide();
$(".tabs:first").show();
$(".dateList li a").click(function () {
var tablink = $(this).attr('href');
$(".tabs").hide();
$(tablink).show();
$(this).parents(".dateList").find('li').removeClass("active");
$(this).parents(".dateList li").addClass("active");
return false;
});
$("#flip").click(function(){
$("#panel").slideToggle();
});
$("#track").click(function(){
$("#filter").slideToggle();
});
$("#click").click(function(){ 
$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
return false;   
});
$('#close').click(function() {
$('#breakingNews').css({
'display': 'none',       
});
});
$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
});
(function ($window) {
//Configure colorbox call back to resize with custom dimensions 
$.colorbox.settings.onLoad = function() {
colorboxResize();
}
//Customize colorbox dimensions
var colorboxResize = function(resize) {
var width = "90%";
var height = "90%";
if($(window).width() > 960) { width = "860" }
if($(window).height() > 700) { height = "630" } 
$.colorbox.settings.height = height;
$.colorbox.settings.width = width;
//if window is resized while lightbox open
if(resize) {
$.colorbox.resize({
'height': height,
'width': width
});
} 
}
//In case of window being resized
$(window).resize(function() {
colorboxResize(true);
});
})(jQuery, this, this.document);
$(document).ready(function() {
$(".liveInfo").hide();
$(".liveInfo:first").show();
$(".trendingMenu li a").click(function () {
var tablink = $(this).attr('href');
$(".liveInfo").hide();
$(tablink).show();
$(this).parents(".trendingMenu").find('li').removeClass("active");
$(this).parents(".trendingMenu li").addClass("active");
return false;
});
});

