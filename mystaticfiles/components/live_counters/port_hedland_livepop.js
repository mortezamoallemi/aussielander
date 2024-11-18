function port_hedland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13828;
var increase = Math.round(passed*2.66565786327667e-14*population);
document.getElementById("port_hedland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_hedland_livepop, 500);
}
