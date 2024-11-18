function yorke_peninsula_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3933;
var increase = Math.round(passed*-6.57702351595169e-14*population);
document.getElementById("yorke_peninsula_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yorke_peninsula_south_livepop, 500);
}
