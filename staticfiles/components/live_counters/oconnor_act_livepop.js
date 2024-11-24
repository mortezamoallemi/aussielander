function oconnor_act_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5477;
var increase = Math.round(passed*2.68451478932344e-13*population);
document.getElementById("oconnor_act_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(oconnor_act_livepop, 500);
}
