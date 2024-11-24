function ripley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4619;
var increase = Math.round(passed*3.07563875892614e-12*population);
document.getElementById("ripley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ripley_livepop, 500);
}
