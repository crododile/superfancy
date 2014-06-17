$(
  $('.page').mouseenter( function(event){
 		if( !$(event.target).hasClass('displayed')){
 			$('.page').each(function(pg){
 				if ($(this).hasClass('displayed')){
 					$(this).removeClass('displayed')
 				}
 			
 		  $(event.target).addClass('displayed');
 			
 			})
 		}
 	})
)
