function trafalgar_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7646;
var increase = Math.round(passed*4.94025350205277e-13*population);
document.getElementById("trafalgar_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(trafalgar_vic_livepop, 500);
}
