function perth_city_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 31296;
var increase = Math.round(passed*1.2974161291711e-12*population);
document.getElementById("perth_city_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(perth_city_livepop, 500);
}
