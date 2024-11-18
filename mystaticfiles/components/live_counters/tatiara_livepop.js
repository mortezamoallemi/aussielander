function tatiara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6620;
var increase = Math.round(passed*6.35452795046554e-14*population);
document.getElementById("tatiara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tatiara_livepop, 500);
}
