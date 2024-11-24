function rosedale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4723;
var increase = Math.round(passed*2.29697236187586e-13*population);
document.getElementById("rosedale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rosedale_livepop, 500);
}
