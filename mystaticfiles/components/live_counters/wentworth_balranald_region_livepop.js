function wentworth_balranald_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3611;
var increase = Math.round(passed*-9.06756817691316e-14*population);
document.getElementById("wentworth_balranald_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wentworth_balranald_region_livepop, 500);
}
