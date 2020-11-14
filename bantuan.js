$(document).ready(function(){
	function closeBanuan(){
		$(".bantuan1").hide();
		$(".bantuan2").hide();
		$(".bantuan3").hide();
		$(".bantuan4").hide();
	}
	$(".click1").on('click', function(){
		closeBanuan();
		$(".bantuan1").show();
	});
	$(".click2").on('click', function(){
		closeBanuan();
		$(".bantuan2").show();
	});
	$(".click3").on('click', function(){
		closeBanuan();
		$(".bantuan3").show();
	});
	$(".click4").on('click', function(){
		closeBanuan();
		$(".bantuan4").show();
	});
});