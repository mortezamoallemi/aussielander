function rowville_central_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15222;
var increase = Math.round(passed*-6.24638915536439e-15*population);
document.getElementById("rowville_central_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rowville_central_livepop, 500);
}
