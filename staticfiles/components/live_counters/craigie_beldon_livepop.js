function craigie_beldon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9803;
var increase = Math.round(passed*1.36011744164929e-13*population);
document.getElementById("craigie_beldon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(craigie_beldon_livepop, 500);
}
