function central_highlands_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8139;
var increase = Math.round(passed*-5.60452858917412e-13*population);
document.getElementById("central_highlands_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(central_highlands_west_livepop, 500);
}
