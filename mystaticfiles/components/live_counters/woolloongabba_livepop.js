function woolloongabba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5526;
var increase = Math.round(passed*9.10453552072887e-13*population);
document.getElementById("woolloongabba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woolloongabba_livepop, 500);
}
