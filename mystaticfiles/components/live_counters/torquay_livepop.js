function torquay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18361;
var increase = Math.round(passed*1.26405430761265e-12*population);
document.getElementById("torquay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(torquay_livepop, 500);
}
