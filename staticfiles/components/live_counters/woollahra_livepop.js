function woollahra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7686;
var increase = Math.round(passed*4.3012808434019e-13*population);
document.getElementById("woollahra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woollahra_livepop, 500);
}
