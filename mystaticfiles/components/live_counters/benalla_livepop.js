function benalla_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10330;
var increase = Math.round(passed*-1.84154046594781e-15*population);
document.getElementById("benalla_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(benalla_livepop, 500);
}
