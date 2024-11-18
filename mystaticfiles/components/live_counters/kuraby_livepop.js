function kuraby_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8382;
var increase = Math.round(passed*4.76744618452448e-13*population);
document.getElementById("kuraby_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kuraby_livepop, 500);
}
