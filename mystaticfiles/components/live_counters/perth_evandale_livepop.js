function perth_evandale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5063;
var increase = Math.round(passed*4.2476830510991e-13*population);
document.getElementById("perth_evandale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(perth_evandale_livepop, 500);
}
