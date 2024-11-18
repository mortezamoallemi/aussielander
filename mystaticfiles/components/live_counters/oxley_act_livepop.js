function oxley_act_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1697;
var increase = Math.round(passed*-3.13516949701383e-13*population);
document.getElementById("oxley_act_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(oxley_act_livepop, 500);
}
