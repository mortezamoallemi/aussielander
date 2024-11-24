function melbourne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4323072;
var increase = Math.round(passed*7.38996703821299e-13*population);
document.getElementById("melbourne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(melbourne_livepop, 500);
}
