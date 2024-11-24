function victoria_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5926624;
var increase = Math.round(passed*6.44365252070978e-13*population);
document.getElementById("victoria_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(victoria_livepop, 500);
}
