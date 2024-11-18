function cooma_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6737;
var increase = Math.round(passed*5.67347609258697e-14*population);
document.getElementById("cooma_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cooma_livepop, 500);
}
