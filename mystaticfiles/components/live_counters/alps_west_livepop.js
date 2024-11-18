function alps_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24;
var increase = Math.round(passed*-7.4697511197605e-13*population);
document.getElementById("alps_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alps_west_livepop, 500);
}
