function alexandra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6337;
var increase = Math.round(passed*2.45894545643294e-13*population);
document.getElementById("alexandra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alexandra_livepop, 500);
}
