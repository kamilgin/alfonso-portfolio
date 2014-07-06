/*$(document).ready(function(){
	$(document).scroll(function(){
		console.log("On-Off Screen JQuery is loading up!");
		var toggleView = $('.toggle-view');
		if (toggleView.visible()) {
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
	


	
