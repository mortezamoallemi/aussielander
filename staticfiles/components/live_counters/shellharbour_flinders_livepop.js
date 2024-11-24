function shellharbour_flinders_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16831;
var increase = Math.round(passed*1.42355651510842e-12*population);
document.getElementById("shellharbour_flinders_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shellharbour_flinders_livepop, 500);
}
