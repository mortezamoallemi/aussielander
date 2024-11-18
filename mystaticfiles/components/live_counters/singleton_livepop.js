function singleton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16094;
var increase = Math.round(passed*-1.53496445970688e-14*population);
document.getElementById("singleton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(singleton_livepop, 500);
}
