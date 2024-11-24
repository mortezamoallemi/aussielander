function worongary_tallai_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7881;
var increase = Math.round(passed*3.77994131676491e-13*population);
document.getElementById("worongary_tallai_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(worongary_tallai_livepop, 500);
}
