function south_yarra_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20728;
var increase = Math.round(passed*2.1953204544956e-12*population);
document.getElementById("south_yarra_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_yarra_east_livepop, 500);
}
