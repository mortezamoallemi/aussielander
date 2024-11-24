function redlynch_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12807;
var increase = Math.round(passed*6.78820082462032e-13*population);
document.getElementById("redlynch_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(redlynch_livepop, 500);
}
