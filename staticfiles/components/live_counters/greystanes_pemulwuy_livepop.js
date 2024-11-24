function greystanes_pemulwuy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26307;
var increase = Math.round(passed*7.24504594906585e-13*population);
document.getElementById("greystanes_pemulwuy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greystanes_pemulwuy_livepop, 500);
}
