$(function(){
	accordion = function(el){
		var dSize = ((el.children().length -1)/el.children().length) * 100
		var pSize = ((100 -dSize)/(el.children().length -1))
		var newRule = ".displayed { width: "+ dSize+"vw }"
		var pageRule =".page {\
			width: "+ pSize +"vw;\
			-webkit-transition: all 1s ease-in-out;\
			transition: all 1s ease-in-out;\
			overflow-y: hidden;\
			margin: auto;\
			display: inline;\
			position: relative;}"
		$('<style type="text/css"></style>').text(pageRule).appendTo('head');
		$('<style type="text/css"></style>').text(newRule).appendTo('head');	
	
  $('.page').mouseenter(function (event) {
 		if( !$(event.target).hasClass('displayed') &&
		$(event.currentTarget).prop("tagName") === "DIV"){
 			$('.page').each(function (pg) {
 				if ($(this).hasClass('displayed')){
 					$(this).removeClass('displayed')
 				}
 			})
 		  $(event.currentTarget).addClass('displayed')
 		}
 	})
 }
})
