function slacks_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10431;
var increase = Math.round(passed*-1.82371198862822e-15*population);
document.getElementById("slacks_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(slacks_creek_livepop, 500);
}
