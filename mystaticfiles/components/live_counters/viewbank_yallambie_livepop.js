function viewbank_yallambie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18303;
var increase = Math.round(passed*6.75794557243767e-14*population);
document.getElementById("viewbank_yallambie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(viewbank_yallambie_livepop, 500);
}
