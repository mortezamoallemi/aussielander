function caloundra_hinterland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8539;
var increase = Math.round(passed*4.2938542277874e-13*population);
document.getElementById("caloundra_hinterland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(caloundra_hinterland_livepop, 500);
}
