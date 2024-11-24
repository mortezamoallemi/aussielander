function macquarie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2703;
var increase = Math.round(passed*3.54634264199786e-13*population);
document.getElementById("macquarie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(macquarie_livepop, 500);
}
