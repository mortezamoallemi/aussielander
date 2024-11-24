function greenwood_warwick_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13348;
var increase = Math.round(passed*-3.69518304631675e-14*population);
document.getElementById("greenwood_warwick_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greenwood_warwick_livepop, 500);
}
