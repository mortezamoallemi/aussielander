function gilgandra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4376;
var increase = Math.round(passed*-1.19161976951164e-13*population);
document.getElementById("gilgandra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gilgandra_livepop, 500);
}
