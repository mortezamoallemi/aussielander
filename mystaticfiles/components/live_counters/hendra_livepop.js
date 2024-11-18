function hendra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4654;
var increase = Math.round(passed*3.2859994121954e-13*population);
document.getElementById("hendra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hendra_livepop, 500);
}
