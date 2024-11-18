function myrtleford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4634;
var increase = Math.round(passed*1.74827687929063e-13*population);
document.getElementById("myrtleford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(myrtleford_livepop, 500);
}
