function scullin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2931;
var increase = Math.round(passed*2.5835047587873e-13*population);
document.getElementById("scullin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(scullin_livepop, 500);
}
