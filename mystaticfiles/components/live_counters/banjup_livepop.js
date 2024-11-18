function banjup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17533;
var increase = Math.round(passed*1.3367100128432e-12*population);
document.getElementById("banjup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(banjup_livepop, 500);
}
