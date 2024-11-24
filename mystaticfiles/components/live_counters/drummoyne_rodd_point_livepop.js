function drummoyne_rodd_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18326;
var increase = Math.round(passed*3.07366448125218e-13*population);
document.getElementById("drummoyne_rodd_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(drummoyne_rodd_point_livepop, 500);
}
