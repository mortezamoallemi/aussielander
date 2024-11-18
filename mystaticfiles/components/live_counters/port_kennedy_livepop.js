function port_kennedy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13779;
var increase = Math.round(passed*-1.4874774717289e-13*population);
document.getElementById("port_kennedy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_kennedy_livepop, 500);
}
