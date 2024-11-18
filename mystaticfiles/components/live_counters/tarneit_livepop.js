function tarneit_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 34788;
var increase = Math.round(passed*2.91357536433809e-12*population);
document.getElementById("tarneit_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tarneit_livepop, 500);
}
