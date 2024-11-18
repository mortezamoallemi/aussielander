function central_coast_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 319681;
var increase = Math.round(passed*3.0324358489181e-13*population);
document.getElementById("central_coast_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(central_coast_livepop, 500);
}
