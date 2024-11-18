function rosemeadow_glen_alpine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20876;
var increase = Math.round(passed*2.21961833133438e-13*population);
document.getElementById("rosemeadow_glen_alpine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rosemeadow_glen_alpine_livepop, 500);
}
