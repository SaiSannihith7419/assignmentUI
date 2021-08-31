function block(){
    var Ename = document.getElementById("sai1").value;
    var Ecity = document.getElementById("sai2").value;
    var Enumber = document.getElementById("sai3").value;
	var Enumber1 = document.getElementById("sai4").value;
   
  
    var table = document.getElementsByTagName('table')[0];
  var row = table.insertRow(3);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  cell1.innerHTML = Ename;
  cell2.innerHTML = Ecity;
  cell3.innerHTML = Enumber;
  cell4.innerHTML = Enumber1;
};