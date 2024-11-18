function smithton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3885;
var increase = Math.round(passed*-7.7876139206378e-14*population);
document.getElementById("smithton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(smithton_livepop, 500);
}
