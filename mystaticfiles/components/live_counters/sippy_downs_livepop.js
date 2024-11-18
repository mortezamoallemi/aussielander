function sippy_downs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10298;
var increase = Math.round(passed*7.92712072838369e-13*population);
document.getElementById("sippy_downs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sippy_downs_livepop, 500);
}
