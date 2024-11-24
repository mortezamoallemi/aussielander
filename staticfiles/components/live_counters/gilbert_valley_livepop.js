function gilbert_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4896;
var increase = Math.round(passed*2.00011945171238e-13*population);
document.getElementById("gilbert_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gilbert_valley_livepop, 500);
}
