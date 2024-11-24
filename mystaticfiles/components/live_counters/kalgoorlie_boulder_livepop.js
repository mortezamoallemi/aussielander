function kalgoorlie_boulder_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 29875;
var increase = Math.round(passed*-2.0161427221876e-13*population);
document.getElementById("kalgoorlie_boulder_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kalgoorlie_boulder_livepop, 500);
}
