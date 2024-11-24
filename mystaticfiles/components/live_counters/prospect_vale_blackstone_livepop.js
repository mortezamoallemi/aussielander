function prospect_vale_blackstone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6418;
var increase = Math.round(passed*1.03609541805336e-13*population);
document.getElementById("prospect_vale_blackstone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(prospect_vale_blackstone_livepop, 500);
}
