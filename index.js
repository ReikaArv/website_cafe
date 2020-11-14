$(document).ready(function(){
	$("#minbtn").on('click', function(){
		var angka = $(".displayPesanan").val();
		if(angka == 1){
			alert('Pesanan Minimal Sebanyak 1');
		}else{
			var fixAngka = angka-1;
			$(".displayPesanan").val(fixAngka);

		}
		
	})
	$("#plusbtn").on('click', function(){
		var angka = $(".displayPesanan").val();
		var n = parseInt(angka);
		var fixAngka = n+1;
		$(".displayPesanan").val(fixAngka);
	})
})