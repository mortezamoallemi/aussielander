function neutral_bay_kirribilli_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17852;
var increase = Math.round(passed*4.18496464439109e-13*population);
document.getElementById("neutral_bay_kirribilli_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(neutral_bay_kirribilli_livepop, 500);
}
