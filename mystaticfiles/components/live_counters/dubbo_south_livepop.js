function dubbo_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16942;
var increase = Math.round(passed*4.73157904932428e-13*population);
document.getElementById("dubbo_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dubbo_south_livepop, 500);
}
