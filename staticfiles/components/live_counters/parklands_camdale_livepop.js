function parklands_camdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6328;
var increase = Math.round(passed*2.40986676165325e-14*population);
document.getElementById("parklands_camdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parklands_camdale_livepop, 500);
}
