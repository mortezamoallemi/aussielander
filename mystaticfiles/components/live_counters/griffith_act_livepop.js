function griffith_act_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4576;
var increase = Math.round(passed*1.01212787641411e-12*population);
document.getElementById("griffith_act_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(griffith_act_livepop, 500);
}
