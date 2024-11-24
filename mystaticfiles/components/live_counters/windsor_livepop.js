function windsor_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7187;
var increase = Math.round(passed*7.47416337731732e-13*population);
document.getElementById("windsor_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(windsor_livepop, 500);
}
