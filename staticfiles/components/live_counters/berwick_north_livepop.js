function berwick_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22896;
var increase = Math.round(passed*1.80938169717456e-13*population);
document.getElementById("berwick_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(berwick_north_livepop, 500);
}
