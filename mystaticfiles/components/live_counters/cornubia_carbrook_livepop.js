function cornubia_carbrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8452;
var increase = Math.round(passed*3.24036317525908e-13*population);
document.getElementById("cornubia_carbrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cornubia_carbrook_livepop, 500);
}
