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

				$('#commercial-slider').carouFredSel({
					auto: false,
					responsive: true,
					width: '100%',
					scroll: 1,
					prev: '#prev2',
					next: '#next2',
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

				$('#documentary-slider').carouFredSel({
					auto: false,
					responsive: true,
					width: '100%',
					scroll: 1,
					prev: '#prev3',
					next: '#next3',	
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
