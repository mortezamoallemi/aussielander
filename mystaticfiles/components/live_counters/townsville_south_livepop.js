function townsville_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4300;
var increase = Math.round(passed*5.20792136350438e-13*population);
document.getElementById("townsville_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(townsville_south_livepop, 500);
}
