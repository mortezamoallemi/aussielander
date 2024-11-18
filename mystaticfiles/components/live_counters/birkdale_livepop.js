function birkdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14922;
var increase = Math.round(passed*2.49654213248859e-13*population);
document.getElementById("birkdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(birkdale_livepop, 500);
}
