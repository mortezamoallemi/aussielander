function gayndah_mundubbera_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6657;
var increase = Math.round(passed*2.2200332790018e-13*population);
document.getElementById("gayndah_mundubbera_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gayndah_mundubbera_livepop, 500);
}
