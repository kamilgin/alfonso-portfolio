			$(function() {
				//	Responsive layout, resizing the items
				$('#narrative-slider').carouFredSel({
					auto: false,
					responsive: true,
					width: '100%',
					scroll: 1,
					prev: '#prev1',
					next: '#next1',		
					pagination: '#pagination4',			
					items: {
						width: 400,
					//	height: '30%',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
					
				});

				$('#foo5').carouFredSel({
					auto: false,
					responsive: true,
					width: '100%',
					scroll: 1,
					prev: '#prev5',
					next: '#next5',
					pagination: '#pagination5',					
					items: {
						width: 400,
					//	height: '30%',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});

				$('#foo6').carouFredSel({
					auto: false,
					responsive: true,
					width: '100%',
					scroll: 1,
					prev: '#prev6',
					next: '#next6',	
					pagination: '#pagination6',
					items: {
						width: 400,
					//	height: '30%',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});

				

			});
