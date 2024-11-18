function garbutt_west_end_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6532;
var increase = Math.round(passed*-1.85612875506463e-13*population);
document.getElementById("garbutt_west_end_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(garbutt_west_end_livepop, 500);
}
