$(document).ready(function(){
	function closeBantuan(){
		$(".bantuan1").hide();
		$(".bantuan2").hide();
		$(".bantuan3").hide();
		$(".bantuan4").hide();
	}
	$(".click1").on('click', function(){
		closeBantuan();
		$(".bantuan1").show();
	});
	$(".click2").on('click', function(){
		closeBantuan();
		$(".bantuan2").show();
	});
	$(".click3").on('click', function(){
		closeBantuan();
		$(".bantuan3").show();
	});
	$(".click4").on('click', function(){
		closeBantuan();
		$(".bantuan4").show();
	});
});