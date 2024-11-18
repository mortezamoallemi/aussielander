function amaroo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5708;
var increase = Math.round(passed*1.55210842690242e-13*population);
document.getElementById("amaroo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(amaroo_livepop, 500);
}
