function albury_wodonga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 89013;
var increase = Math.round(passed*5.14025215746616e-13*population);
document.getElementById("albury_wodonga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albury_wodonga_livepop, 500);
}
