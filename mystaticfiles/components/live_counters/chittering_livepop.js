function chittering_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5474;
var increase = Math.round(passed*1.3463182196124e-12*population);
document.getElementById("chittering_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chittering_livepop, 500);
}
