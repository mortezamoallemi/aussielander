function west_wodonga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14951;
var increase = Math.round(passed*1.57182800051409e-13*population);
document.getElementById("west_wodonga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_wodonga_livepop, 500);
}
