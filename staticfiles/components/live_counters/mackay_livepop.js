function mackay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 78683;
var increase = Math.round(passed*1.13037333244318e-13*population);
document.getElementById("mackay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mackay_livepop, 500);
}
