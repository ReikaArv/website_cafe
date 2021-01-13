function resetPassPopUp(){
    var respond = prompt("Masukkan Email yang terdaftar dengan Akun anda. anda akan menerima password baru akun anda ");
    if(respond != "")
    {
      window.alert("Email terkirim, silahkan cek Email anda");
    }
    else
    {
      window.alert("Permintaan lupa password dibatalkan");
    }
    };
