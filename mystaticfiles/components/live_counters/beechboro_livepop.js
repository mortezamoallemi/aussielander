function beechboro_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18093;
var increase = Math.round(passed*1.10245456830742e-12*population);
document.getElementById("beechboro_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beechboro_livepop, 500);
}
