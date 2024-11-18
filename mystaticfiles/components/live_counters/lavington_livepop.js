function lavington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14473;
var increase = Math.round(passed*2.46615634506832e-13*population);
document.getElementById("lavington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lavington_livepop, 500);
}
