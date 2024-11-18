function cranbourne_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8817;
var increase = Math.round(passed*1.72526667821006e-12*population);
document.getElementById("cranbourne_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cranbourne_south_livepop, 500);
}
