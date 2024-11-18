function valentine_eleebana_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11994;
var increase = Math.round(passed*1.4292637968916e-14*population);
document.getElementById("valentine_eleebana_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(valentine_eleebana_livepop, 500);
}
