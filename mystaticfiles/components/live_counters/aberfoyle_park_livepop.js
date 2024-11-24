function aberfoyle_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11658;
var increase = Math.round(passed*-1.16962901429141e-13*population);
document.getElementById("aberfoyle_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(aberfoyle_park_livepop, 500);
}
