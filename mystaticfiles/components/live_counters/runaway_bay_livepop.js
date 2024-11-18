function runaway_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9069;
var increase = Math.round(passed*1.1217505696799e-13*population);
document.getElementById("runaway_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(runaway_bay_livepop, 500);
}
