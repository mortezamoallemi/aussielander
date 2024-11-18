function roma_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6853;
var increase = Math.round(passed*-4.79406028511467e-14*population);
document.getElementById("roma_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(roma_livepop, 500);
}
