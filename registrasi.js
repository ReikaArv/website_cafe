function addData(){
  var inputNama = document.getElementById('nama').value;
  var inputDate = document.getElementById('date').value;
  var inputEmail = document.getElementById('email').value;
  var inputPassword = document.getElementById('password').value;
  var inputNoHp = document.getElementById('nohp').value;
  var inputLokasi = document.getElementById('lokasi').value;
  var tabel = document.getElementById('tbl');

  if(!inputNama){
    alert("Nama Harus Diisi");
  }else if(!inputDate){
    alert("Tanggal Harus Diisi");
  }
  else if(!inputEmail){
    alert("Email Harus Diisi");
  }
  else if(!inputPassword){
    alert("Password Harus Diisi");
  }
  else if(!inputNoHp){
    alert("No Hp Harus Diisi");
  }
  else if(!inputLokasi){
    alert("Lokasi Harus Diisi");
  }
  else if(inputNama){
    alert("Berhasil Simpan Data");
    var row = tabel.insertRow(1);
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    var c3 = row.insertCell(2);
    var c4 = row.insertCell(3);
    var c5 = row.insertCell(4);
    var c6 = row.insertCell(5);
    c1.innerHTML = inputNama;
    c2.innerHTML = inputDate;
    c3.innerHTML = inputEmail;
    c4.innerHTML = inputPassword;
    c5.innerHTML = inputNoHp;
    c6.innerHTML = inputLokasi;
  }
}