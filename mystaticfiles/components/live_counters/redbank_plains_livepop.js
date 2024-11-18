function redbank_plains_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19304;
var increase = Math.round(passed*1.61041466464496e-12*population);
document.getElementById("redbank_plains_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(redbank_plains_livepop, 500);
}
