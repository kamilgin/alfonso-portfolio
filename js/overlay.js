$(document).ready(function(){	
	// var nar-thumb = $(".news-thumb");
	// var overlay = $(".overlay");
	// thumb.mouseover(function(){		
	// 	overlay.width(thumb.width());
	// })
	var narThumb = $("#narrative  .news-thumb");
	var narOverlay = $("#narrative  .overlay");
	narThumb.mouseover(function(){		
		console.log("narrative hover");
		narOverlay.width(narThumb.width());
	});

	var comThumb = $("#commercial  .news-thumb");
	var comOverlay = $("#commercial  .overlay");
	comThumb.mouseover(function(){	
		console.log("commercial hover");	
		comOverlay.width(comThumb.width());
	});

	var docThumb = $("#documentary  .news-thumb");
	var docOverlay = $("#documentary  .overlay");
	docThumb.mouseover(function(){		
		console.log("documentary hover");
		docOverlay.width(docThumb.width());
	});


})