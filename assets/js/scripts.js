$(document).ready(function() {
	console.log('test')
	$(".biz-selection .selected").click(function(e) {
		$(this).parent().toggleClass("open");
	});
	$(".options li").click(function() {
		$(".biz-selection .selected").text($(this).text());
		color =$(this).data('color');
		if(color == 1) {
			$("body").addClass("colorBiz").removeClass("colorPerson").removeClass("colorComm");
		}
		if(color == 2) {
			$("body").addClass("colorPerson").removeClass("colorBiz").removeClass("colorComm");
		}
		if(color == 3) {
			$("body").addClass("colorComm").removeClass("colorPerson").removeClass("colorBiz");
		}
		$(".biz-selection").removeClass("open");
	});

});

