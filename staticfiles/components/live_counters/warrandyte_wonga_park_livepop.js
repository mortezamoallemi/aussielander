function warrandyte_wonga_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10047;
var increase = Math.round(passed*2.59333423019025e-14*population);
document.getElementById("warrandyte_wonga_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warrandyte_wonga_park_livepop, 500);
}
