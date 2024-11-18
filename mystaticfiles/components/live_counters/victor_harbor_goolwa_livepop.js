function victor_harbor_goolwa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25507;
var increase = Math.round(passed*4.25715240492388e-13*population);
document.getElementById("victor_harbor_goolwa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(victor_harbor_goolwa_livepop, 500);
}
