function kingsley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13059;
var increase = Math.round(passed*-7.77098121846148e-14*population);
document.getElementById("kingsley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingsley_livepop, 500);
}
