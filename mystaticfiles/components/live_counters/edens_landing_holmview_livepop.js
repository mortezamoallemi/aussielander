function edens_landing_holmview_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7452;
var increase = Math.round(passed*7.96957461721971e-13*population);
document.getElementById("edens_landing_holmview_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(edens_landing_holmview_livepop, 500);
}
