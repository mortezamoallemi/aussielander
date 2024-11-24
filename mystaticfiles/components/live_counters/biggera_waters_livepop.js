function biggera_waters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8535;
var increase = Math.round(passed*1.88744352471889e-12*population);
document.getElementById("biggera_waters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(biggera_waters_livepop, 500);
}
