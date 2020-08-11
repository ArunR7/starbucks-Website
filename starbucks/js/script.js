$(function () {

	$(".navbar-toggler").blur(function(event){

		var screenWidth=window.innerWidth;
		if (screenWidth < 990) {
			$("#collapsable-nav").collapse('hide');
		}

	});
	
});