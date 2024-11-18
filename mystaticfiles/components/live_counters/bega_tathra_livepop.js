function bega_tathra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8405;
var increase = Math.round(passed*2.76837223065591e-13*population);
document.getElementById("bega_tathra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bega_tathra_livepop, 500);
}
