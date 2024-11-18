function west_footscray_tottenham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11457;
var increase = Math.round(passed*7.19013657005445e-13*population);
document.getElementById("west_footscray_tottenham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_footscray_tottenham_livepop, 500);
}
