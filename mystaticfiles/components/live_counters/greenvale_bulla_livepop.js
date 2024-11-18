function greenvale_bulla_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16295;
var increase = Math.round(passed*1.88612986132076e-12*population);
document.getElementById("greenvale_bulla_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greenvale_bulla_livepop, 500);
}
