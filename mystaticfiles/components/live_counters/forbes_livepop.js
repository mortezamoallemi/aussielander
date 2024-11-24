function forbes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10166;
var increase = Math.round(passed*2.29302126943184e-13*population);
document.getElementById("forbes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forbes_livepop, 500);
}
