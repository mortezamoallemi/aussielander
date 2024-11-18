function wembley_west_leederville_glendalough_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17848;
var increase = Math.round(passed*4.72723585452555e-13*population);
document.getElementById("wembley_west_leederville_glendalough_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wembley_west_leederville_glendalough_livepop, 500);
}
