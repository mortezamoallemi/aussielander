function prospect_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14445;
var increase = Math.round(passed*2.04791378973386e-13*population);
document.getElementById("prospect_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(prospect_livepop, 500);
}
