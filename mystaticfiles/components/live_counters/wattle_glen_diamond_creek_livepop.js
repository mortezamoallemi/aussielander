function wattle_glen_diamond_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13703;
var increase = Math.round(passed*1.17715209523208e-13*population);
document.getElementById("wattle_glen_diamond_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wattle_glen_diamond_creek_livepop, 500);
}
