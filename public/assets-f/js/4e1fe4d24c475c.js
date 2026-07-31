(function( $ ) {
	$.fn.BA_CookiesNotificationBar = function() {
		var $container = $(this);

		$container.find(".close-button").click(function(){
			$container.slideUp(400, function(){
				$container.remove();
				$.ajax({
					url: '/web/modules/CookiesNotification/ajax.asp',
					type: 'POST',
					data: "action=1",
					dataType: "json",
					cache: false,
					success: function (data) {
					} 
				});
			});
		});
	}
})(jQuery);


$(window).on('load', function() {
	$(".ba-cookies-module").BA_CookiesNotificationBar();
});

