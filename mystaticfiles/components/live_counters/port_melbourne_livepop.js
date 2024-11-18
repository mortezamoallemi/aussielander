function port_melbourne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16158;
var increase = Math.round(passed*6.80065230726304e-13*population);
document.getElementById("port_melbourne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_melbourne_livepop, 500);
}
