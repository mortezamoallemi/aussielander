function stanthorpe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5409;
var increase = Math.round(passed*2.93800136153172e-14*population);
document.getElementById("stanthorpe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(stanthorpe_livepop, 500);
}
