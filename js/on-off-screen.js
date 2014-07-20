/*
$(document).ready(function(){
	$(document).scroll(function(){
		console.log("On-Off Screen JQuery is loading up!");
		var section = $('section');
		var toggleView = $('.toggle-view');
		if (section.visible()) {
			toggleView.addClass("on-screen").removeClass("off-screen");
			console.log("toggleView is visible");
		} else {
			toggleView.removeClass("on-screen").addClass("off-screen");
			console.log("toggleView is NOT visible");
		}
		}
	)
});
*/


$(document).ready(function(){
	$(window).scroll(function(){
		console.log("On-Off Screen JQuery is loading up!");
		var narrative = $('#narrative');
		var toggleView = $('.toggle-view');
		if (narrative.visible(true)) {
			toggleView.removeClass("on-screen").addClass("off-screen");
			console.log("narrative is visible");
		} else {
			toggleView.addClass("on-screen").removeClass("off-screen");
			console.log("narrative is NOT visible");
		}
		}
	)
});

//When the parent section of THIS element becomes visible, add class ".on-screen"
	


	
