function glenelg_sa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19869;
var increase = Math.round(passed*6.44836290034198e-14*population);
document.getElementById("glenelg_sa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glenelg_sa_livepop, 500);
}
