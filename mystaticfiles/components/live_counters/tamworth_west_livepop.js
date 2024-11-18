function tamworth_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5563;
var increase = Math.round(passed*2.80874927306308e-13*population);
document.getElementById("tamworth_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tamworth_west_livepop, 500);
}
