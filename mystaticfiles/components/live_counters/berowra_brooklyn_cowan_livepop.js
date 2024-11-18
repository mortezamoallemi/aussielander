function berowra_brooklyn_cowan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11699;
var increase = Math.round(passed*1.6697555408306e-13*population);
document.getElementById("berowra_brooklyn_cowan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(berowra_brooklyn_cowan_livepop, 500);
}
