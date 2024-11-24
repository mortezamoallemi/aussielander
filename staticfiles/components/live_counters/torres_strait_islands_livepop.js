function torres_strait_islands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4517;
var increase = Math.round(passed*3.86409650787301e-13*population);
document.getElementById("torres_strait_islands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(torres_strait_islands_livepop, 500);
}
