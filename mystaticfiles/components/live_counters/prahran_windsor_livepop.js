function prahran_windsor_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19719;
var increase = Math.round(passed*7.62552431723806e-13*population);
document.getElementById("prahran_windsor_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(prahran_windsor_livepop, 500);
}
