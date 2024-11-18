function east_bendigo_kennington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13509;
var increase = Math.round(passed*-8.11647413123336e-14*population);
document.getElementById("east_bendigo_kennington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_bendigo_kennington_livepop, 500);
}
