function woolgoolga_arrawarra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12521;
var increase = Math.round(passed*5.68189957081817e-13*population);
document.getElementById("woolgoolga_arrawarra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woolgoolga_arrawarra_livepop, 500);
}
