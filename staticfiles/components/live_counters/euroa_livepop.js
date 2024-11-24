function euroa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6275;
var increase = Math.round(passed*3.35148322469919e-13*population);
document.getElementById("euroa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(euroa_livepop, 500);
}
