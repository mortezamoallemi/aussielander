function braeside_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 61;
var increase = Math.round(passed*9.80418890608685e-12*population);
document.getElementById("braeside_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(braeside_livepop, 500);
}
