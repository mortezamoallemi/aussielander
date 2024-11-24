function camden_haven_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16743;
var increase = Math.round(passed*3.91774590849499e-13*population);
document.getElementById("camden_haven_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(camden_haven_livepop, 500);
}
