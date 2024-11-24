function bowral_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12948;
var increase = Math.round(passed*4.02903761653496e-13*population);
document.getElementById("bowral_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bowral_livepop, 500);
}
