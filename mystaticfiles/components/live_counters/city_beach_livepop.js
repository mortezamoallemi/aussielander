function city_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6611;
var increase = Math.round(passed*2.49465244019352e-13*population);
document.getElementById("city_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(city_beach_livepop, 500);
}
