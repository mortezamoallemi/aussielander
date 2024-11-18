function longford_loch_sport_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4304;
var increase = Math.round(passed*7.31705910960577e-13*population);
document.getElementById("longford_loch_sport_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(longford_loch_sport_livepop, 500);
}
