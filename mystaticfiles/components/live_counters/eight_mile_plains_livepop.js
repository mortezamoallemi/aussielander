function eight_mile_plains_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15161;
var increase = Math.round(passed*4.69571382667772e-13*population);
document.getElementById("eight_mile_plains_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eight_mile_plains_livepop, 500);
}
