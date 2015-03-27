
/*
	滚动+固定控件

*/
(function($) {
	var settings = {};

	function scrollToFixed(element) {

		var scrollPoint = settings.scrollPoint || $(element).offset().top;

		$(window).scroll(function(){ 

		  if ($(window).scrollTop()> scrollPoint) {
		      $(element).css({position:"fixed",left: settings.fixedLeft ,top: settings.fixedTop});
		  }else{
		      $(element).css({position: "relative"});
		  }

		});
	}

	$.fn.scrollFixed = function (options) {
		var defaults = {
			scrollPoint : null,
			fixedLeft : '0px',
		    fixedTop: '0px'
		};

		$.extend(settings, defaults, options);

		return $(this).each(function() {
			scrollToFixed(this);
		});
	}
})(typeof(jQuery) ==="undefined" ? Zepto : jQuery)


