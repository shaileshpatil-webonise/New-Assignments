$(document).ready(function() {
$(".info").hide();
$(".info:first").show();
$(".coupenMenu li a").click(function () {
var tablink = $(this).attr('href');
$(".info").hide();
$(tablink).show();
$(this).parents(".coupenMenu").find('li').removeClass("active");
$(this).parents(".coupenMenu li").addClass("active");
return false;
});
$(".maps").hide();
$(".maps:first").show();
$(".analysisMenu  li a").click(function () {
var tablink = $(this).attr('href');
$(".maps").hide();
$(tablink).show();
$(this).parents(".analysisMenu ").find('li').removeClass("active");
$(this).parents(".analysisMenu li").addClass("active");
return false;
});
});