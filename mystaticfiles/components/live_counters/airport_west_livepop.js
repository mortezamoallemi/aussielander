function airport_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7562;
var increase = Math.round(passed*5.27927630257425e-13*population);
document.getElementById("airport_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(airport_west_livepop, 500);
}
