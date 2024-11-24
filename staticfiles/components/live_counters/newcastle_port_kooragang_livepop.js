function newcastle_port_kooragang_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16;
var increase = Math.round(passed*0*population);
document.getElementById("newcastle_port_kooragang_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newcastle_port_kooragang_livepop, 500);
}
