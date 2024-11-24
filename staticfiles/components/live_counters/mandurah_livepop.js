function mandurah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9091;
var increase = Math.round(passed*3.75024565276125e-13*population);
document.getElementById("mandurah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mandurah_livepop, 500);
}
