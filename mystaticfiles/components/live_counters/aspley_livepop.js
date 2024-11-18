function aspley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12315;
var increase = Math.round(passed*-6.81249103471244e-14*population);
document.getElementById("aspley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(aspley_livepop, 500);
}
