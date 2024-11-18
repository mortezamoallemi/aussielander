function yorke_peninsula_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7128;
var increase = Math.round(passed*7.24803134425599e-14*population);
document.getElementById("yorke_peninsula_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yorke_peninsula_north_livepop, 500);
}
