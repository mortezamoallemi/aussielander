function armadale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8975;
var increase = Math.round(passed*1.53773651864805e-13*population);
document.getElementById("armadale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(armadale_livepop, 500);
}
