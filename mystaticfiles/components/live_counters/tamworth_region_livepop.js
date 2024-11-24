function tamworth_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18472;
var increase = Math.round(passed*4.00334646735322e-13*population);
document.getElementById("tamworth_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tamworth_region_livepop, 500);
}
