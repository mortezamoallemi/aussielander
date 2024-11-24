function port_macquarie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 45376;
var increase = Math.round(passed*5.32437615978994e-13*population);
document.getElementById("port_macquarie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_macquarie_livepop, 500);
}
