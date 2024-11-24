function hurstville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23613;
var increase = Math.round(passed*1.00516152193121e-12*population);
document.getElementById("hurstville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hurstville_livepop, 500);
}
