function west_hobart_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5876;
var increase = Math.round(passed*8.25617754899621e-14*population);
document.getElementById("west_hobart_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_hobart_livepop, 500);
}
