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

$(document).ready(function(){
	$("#orderminbtn").on('click', function(){
		var angka = $(".jumorder").val();
		if(angka == -1){
			alert('Tidak boleh kurang dari 0');
		}else{
			var fixAngka = angka-1;
			$(".jumorder").val(fixAngka);

		}
	})
	$("#orderplusbtn").on('click', function(){
		var angka = $(".jumorder").val();
		var n = parseInt(angka);
		var fixAngka = n+1;
		$(".jumorder").val(fixAngka);
	})
})
