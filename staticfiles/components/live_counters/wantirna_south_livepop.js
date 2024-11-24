function wantirna_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17808;
var increase = Math.round(passed*1.18988227733162e-13*population);
document.getElementById("wantirna_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wantirna_south_livepop, 500);
}
