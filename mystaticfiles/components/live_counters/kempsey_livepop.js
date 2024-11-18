function kempsey_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14756;
var increase = Math.round(passed*2.02624553356582e-13*population);
document.getElementById("kempsey_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kempsey_livepop, 500);
}
