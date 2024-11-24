function hillarys_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10807;
var increase = Math.round(passed*7.3782283126902e-14*population);
document.getElementById("hillarys_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hillarys_livepop, 500);
}
