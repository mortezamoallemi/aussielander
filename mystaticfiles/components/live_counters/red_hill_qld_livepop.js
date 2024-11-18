function red_hill_qld_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5746;
var increase = Math.round(passed*2.246766448726e-13*population);
document.getElementById("red_hill_qld_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(red_hill_qld_livepop, 500);
}
