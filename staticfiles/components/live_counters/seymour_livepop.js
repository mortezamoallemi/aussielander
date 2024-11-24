function seymour_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6332;
var increase = Math.round(passed*-3.79460144933172e-14*population);
document.getElementById("seymour_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seymour_livepop, 500);
}
