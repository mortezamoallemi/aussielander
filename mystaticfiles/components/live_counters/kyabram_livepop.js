function kyabram_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10906;
var increase = Math.round(passed*9.90447491874135e-14*population);
document.getElementById("kyabram_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kyabram_livepop, 500);
}
