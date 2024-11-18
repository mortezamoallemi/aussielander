function tanami_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2745;
var increase = Math.round(passed*-4.13631076024112e-13*population);
document.getElementById("tanami_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tanami_livepop, 500);
}
