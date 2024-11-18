function warners_bay_boolaroo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13371;
var increase = Math.round(passed*2.96134816594934e-13*population);
document.getElementById("warners_bay_boolaroo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warners_bay_boolaroo_livepop, 500);
}
