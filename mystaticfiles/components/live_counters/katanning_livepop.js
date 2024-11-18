function katanning_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4561;
var increase = Math.round(passed*-5.12400343190412e-14*population);
document.getElementById("katanning_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(katanning_livepop, 500);
}
