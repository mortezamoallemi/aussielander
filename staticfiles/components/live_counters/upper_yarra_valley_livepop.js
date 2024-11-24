function upper_yarra_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 184;
var increase = Math.round(passed*-1.16201765543358e-12*population);
document.getElementById("upper_yarra_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(upper_yarra_valley_livepop, 500);
}
