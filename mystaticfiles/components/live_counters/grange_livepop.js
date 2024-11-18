function grange_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4247;
var increase = Math.round(passed*1.28216155249184e-13*population);
document.getElementById("grange_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(grange_livepop, 500);
}
