function cannon_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5720;
var increase = Math.round(passed*1.50871008341425e-12*population);
document.getElementById("cannon_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cannon_hill_livepop, 500);
}
