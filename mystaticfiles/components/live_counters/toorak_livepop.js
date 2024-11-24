function toorak_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13046;
var increase = Math.round(passed*8.66327680262329e-14*population);
document.getElementById("toorak_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toorak_livepop, 500);
}
