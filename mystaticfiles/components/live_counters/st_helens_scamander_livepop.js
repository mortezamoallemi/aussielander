function st_helens_scamander_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6086;
var increase = Math.round(passed*-9.30984351071523e-14*population);
document.getElementById("st_helens_scamander_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_helens_scamander_livepop, 500);
}
