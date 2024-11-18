function keperra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7082;
var increase = Math.round(passed*6.4806269934128e-14*population);
document.getElementById("keperra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(keperra_livepop, 500);
}
