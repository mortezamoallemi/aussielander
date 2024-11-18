function northgate_oakden_gilles_plains_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24591;
var increase = Math.round(passed*1.06334315794095e-12*population);
document.getElementById("northgate_oakden_gilles_plains_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northgate_oakden_gilles_plains_livepop, 500);
}
