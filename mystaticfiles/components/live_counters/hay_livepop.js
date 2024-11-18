function hay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2970;
var increase = Math.round(passed*-5.73936803647763e-14*population);
document.getElementById("hay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hay_livepop, 500);
}
