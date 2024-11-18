function ermington_rydalmere_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21423;
var increase = Math.round(passed*6.89509423499841e-13*population);
document.getElementById("ermington_rydalmere_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ermington_rydalmere_livepop, 500);
}
