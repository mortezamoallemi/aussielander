function hampton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17638;
var increase = Math.round(passed*2.80832633958359e-13*population);
document.getElementById("hampton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hampton_livepop, 500);
}
