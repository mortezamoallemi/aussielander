function west_end_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9618;
var increase = Math.round(passed*1.11919506697423e-12*population);
document.getElementById("west_end_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_end_livepop, 500);
}
