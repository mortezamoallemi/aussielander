function modbury_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18897;
var increase = Math.round(passed*-1.87661785658387e-14*population);
document.getElementById("modbury_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(modbury_heights_livepop, 500);
}
