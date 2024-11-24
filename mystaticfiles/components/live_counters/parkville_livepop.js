function parkville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7409;
var increase = Math.round(passed*1.13696001698754e-12*population);
document.getElementById("parkville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parkville_livepop, 500);
}
