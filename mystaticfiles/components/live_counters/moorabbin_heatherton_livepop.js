function moorabbin_heatherton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8799;
var increase = Math.round(passed*5.63430817767503e-13*population);
document.getElementById("moorabbin_heatherton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moorabbin_heatherton_livepop, 500);
}
