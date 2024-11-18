function south_perth_kensington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16576;
var increase = Math.round(passed*5.3405472175825e-14*population);
document.getElementById("south_perth_kensington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_perth_kensington_livepop, 500);
}
