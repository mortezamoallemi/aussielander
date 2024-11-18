function darwin_city_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6467;
var increase = Math.round(passed*2.23671102761931e-12*population);
document.getElementById("darwin_city_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(darwin_city_livepop, 500);
}
