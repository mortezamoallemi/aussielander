function goodna_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10883;
var increase = Math.round(passed*1.02832349206695e-12*population);
document.getElementById("goodna_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(goodna_livepop, 500);
}
