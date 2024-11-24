function augusta_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5432;
var increase = Math.round(passed*1.28745103413417e-12*population);
document.getElementById("augusta_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(augusta_livepop, 500);
}
