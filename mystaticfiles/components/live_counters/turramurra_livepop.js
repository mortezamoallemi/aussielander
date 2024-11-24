function turramurra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19267;
var increase = Math.round(passed*4.21183506713343e-13*population);
document.getElementById("turramurra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(turramurra_livepop, 500);
}
