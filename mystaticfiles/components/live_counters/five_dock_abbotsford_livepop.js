function five_dock_abbotsford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20440;
var increase = Math.round(passed*4.29687186913406e-13*population);
document.getElementById("five_dock_abbotsford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(five_dock_abbotsford_livepop, 500);
}
