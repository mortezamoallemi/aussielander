function moffat_beach_battery_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7835;
var increase = Math.round(passed*4.22311506261606e-14*population);
document.getElementById("moffat_beach_battery_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moffat_beach_battery_hill_livepop, 500);
}
