function rockhampton_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5932;
var increase = Math.round(passed*-2.41247944563613e-13*population);
document.getElementById("rockhampton_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockhampton_west_livepop, 500);
}
