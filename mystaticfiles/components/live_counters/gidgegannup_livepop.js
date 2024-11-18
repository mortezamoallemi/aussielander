function gidgegannup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2741;
var increase = Math.round(passed*5.00497503178022e-13*population);
document.getElementById("gidgegannup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gidgegannup_livepop, 500);
}
