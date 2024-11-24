function merimbula_tura_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10621;
var increase = Math.round(passed*5.23820040647288e-13*population);
document.getElementById("merimbula_tura_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(merimbula_tura_beach_livepop, 500);
}
