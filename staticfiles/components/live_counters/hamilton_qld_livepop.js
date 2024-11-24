function hamilton_qld_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6289;
var increase = Math.round(passed*1.8214431939188e-12*population);
document.getElementById("hamilton_qld_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hamilton_qld_livepop, 500);
}
