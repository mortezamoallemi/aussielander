function warragamba_silverdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5195;
var increase = Math.round(passed*1.69491858849678e-13*population);
document.getElementById("warragamba_silverdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warragamba_silverdale_livepop, 500);
}
