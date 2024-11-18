function goonellabah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13122;
var increase = Math.round(passed*1.99322475102293e-13*population);
document.getElementById("goonellabah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(goonellabah_livepop, 500);
}
