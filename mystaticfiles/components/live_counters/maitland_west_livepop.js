function maitland_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22525;
var increase = Math.round(passed*1.32292898924977e-12*population);
document.getElementById("maitland_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maitland_west_livepop, 500);
}
