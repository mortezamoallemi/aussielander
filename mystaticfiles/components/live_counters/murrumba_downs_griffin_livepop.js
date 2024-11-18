function murrumba_downs_griffin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17519;
var increase = Math.round(passed*2.53156696539173e-12*population);
document.getElementById("murrumba_downs_griffin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(murrumba_downs_griffin_livepop, 500);
}
