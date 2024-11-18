function balcatta_hamersley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15361;
var increase = Math.round(passed*1.61400848335207e-13*population);
document.getElementById("balcatta_hamersley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(balcatta_hamersley_livepop, 500);
}
