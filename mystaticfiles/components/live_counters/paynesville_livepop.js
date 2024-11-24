function paynesville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6313;
var increase = Math.round(passed*7.55519856105581e-13*population);
document.getElementById("paynesville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(paynesville_livepop, 500);
}
