function tamworth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 41006;
var increase = Math.round(passed*3.61168171392391e-13*population);
document.getElementById("tamworth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tamworth_livepop, 500);
}
