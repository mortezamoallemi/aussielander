function east_side_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5048;
var increase = Math.round(passed*-2.28263585433528e-13*population);
document.getElementById("east_side_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_side_livepop, 500);
}
