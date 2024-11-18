function westcourt_bungalow_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6334;
var increase = Math.round(passed*3.81623351176171e-14*population);
document.getElementById("westcourt_bungalow_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(westcourt_bungalow_livepop, 500);
}
