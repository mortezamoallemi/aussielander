function west_mackay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6160;
var increase = Math.round(passed*-3.49499347062543e-13*population);
document.getElementById("west_mackay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_mackay_livepop, 500);
}
