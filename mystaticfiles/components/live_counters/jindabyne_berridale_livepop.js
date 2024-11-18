function jindabyne_berridale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6953;
var increase = Math.round(passed*2.69237165476529e-13*population);
document.getElementById("jindabyne_berridale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(jindabyne_berridale_livepop, 500);
}
