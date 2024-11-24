function tinana_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5477;
var increase = Math.round(passed*7.37140374064936e-13*population);
document.getElementById("tinana_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tinana_livepop, 500);
}
