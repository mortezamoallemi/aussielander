function charnwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2979;
var increase = Math.round(passed*-1.88762696007445e-13*population);
document.getElementById("charnwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(charnwood_livepop, 500);
}
