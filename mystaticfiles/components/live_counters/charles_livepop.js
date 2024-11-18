function charles_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4257;
var increase = Math.round(passed*-2.91166965489621e-13*population);
document.getElementById("charles_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(charles_livepop, 500);
}
