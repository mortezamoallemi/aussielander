function koolpinyah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25;
var increase = Math.round(passed*1.41516711893842e-12*population);
document.getElementById("koolpinyah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(koolpinyah_livepop, 500);
}
