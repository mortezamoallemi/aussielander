function box_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19832;
var increase = Math.round(passed*8.39545394603798e-13*population);
document.getElementById("box_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(box_hill_livepop, 500);
}
