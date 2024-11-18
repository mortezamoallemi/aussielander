function elsey_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2296;
var increase = Math.round(passed*7.09451676943959e-13*population);
document.getElementById("elsey_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(elsey_livepop, 500);
}
