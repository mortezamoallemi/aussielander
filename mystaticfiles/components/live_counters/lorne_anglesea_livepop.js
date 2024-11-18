function lorne_anglesea_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5054;
var increase = Math.round(passed*1.71706945413494e-13*population);
document.getElementById("lorne_anglesea_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lorne_anglesea_livepop, 500);
}
