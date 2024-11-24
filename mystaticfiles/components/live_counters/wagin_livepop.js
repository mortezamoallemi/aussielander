function wagin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4937;
var increase = Math.round(passed*9.44743443230596e-14*population);
document.getElementById("wagin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wagin_livepop, 500);
}
