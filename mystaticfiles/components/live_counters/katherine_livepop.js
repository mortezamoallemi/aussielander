function katherine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9780;
var increase = Math.round(passed*3.80832279169904e-13*population);
document.getElementById("katherine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(katherine_livepop, 500);
}
