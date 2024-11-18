function lysterfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6582;
var increase = Math.round(passed*3.09081739852083e-14*population);
document.getElementById("lysterfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lysterfield_livepop, 500);
}
