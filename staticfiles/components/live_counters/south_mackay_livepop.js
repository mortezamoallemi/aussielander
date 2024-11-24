function south_mackay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6708;
var increase = Math.round(passed*-6.35490433973446e-13*population);
document.getElementById("south_mackay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_mackay_livepop, 500);
}
