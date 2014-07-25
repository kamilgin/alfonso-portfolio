$(document).ready(function(){
	if ($(window).width() <= 960){	
		// do something here
		console.log("mobile-menu loading up");
		$("#main-header").height($(window).height());
	}	
	else {
		$("#main-header").height("auto");
	}
});

$(window).resize(function(){
	if ($(window).width() <= 960){	
		// do something here
		console.log("on RESIZE mobile-menu loading up");
		$("#main-header").height($(window).height());
	}	
	else {
		$("#main-header").height("auto");
	}
});

var x = $("#close-menu");
var header = $("header");
x.onClick(function(){
	header.removeClass()
});