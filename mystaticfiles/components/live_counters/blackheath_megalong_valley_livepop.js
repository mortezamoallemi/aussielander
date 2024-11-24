function blackheath_megalong_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5560;
var increase = Math.round(passed*1.12779586573933e-13*population);
document.getElementById("blackheath_megalong_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(blackheath_megalong_valley_livepop, 500);
}
