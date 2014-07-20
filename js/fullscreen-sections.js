$(document).ready(function(){
	console.log("fullscreen js is loading up");	
	//FROM http://jsfiddle.net/senff/WdF89/1/
	vpw = $(window).width();
	vph = $(window).height();
    $('.full-height').height(vph);
    $('.full-width').width(vpw);
})

$(window).resize(function(){
	console.log("window has been resized");	
	 vpw = $(window).width();
	 vph = $(window).height();
    $('.full-height').height(vph);
    $('.full-width').width(vpw);
})




