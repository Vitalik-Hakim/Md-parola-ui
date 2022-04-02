strLine = "";



function SendData() {
  nocache = "/&nocache=" + Math.random() * 1000000;
  var request = new XMLHttpRequest();
  strLine = "&MSG=" + document.getElementById("msg").Message.value;
  strLine =
    strLine + "/&SD=" + document.getElementById("scroll").ScrollType.value;
  strLine =
    strLine + "/&I=" + document.getElementById("direction").Invert.value;
  strLine = strLine + "/&SP=" + document.getElementById("spid").Speed.value;
  alert(strLine + nocache);
  request.open("GET", strLine + nocache, false);
  request.send(null);
}
