function ulverstone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14155;
var increase = Math.round(passed*2.01937639468558e-14*population);
document.getElementById("ulverstone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ulverstone_livepop, 500);
}
