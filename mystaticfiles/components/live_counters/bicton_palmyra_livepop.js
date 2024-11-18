function bicton_palmyra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13681;
var increase = Math.round(passed*3.44823860294921e-13*population);
document.getElementById("bicton_palmyra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bicton_palmyra_livepop, 500);
}
