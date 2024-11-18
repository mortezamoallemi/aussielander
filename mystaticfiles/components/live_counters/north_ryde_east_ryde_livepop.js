function north_ryde_east_ryde_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12311;
var increase = Math.round(passed*1.73906252049767e-13*population);
document.getElementById("north_ryde_east_ryde_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_ryde_east_ryde_livepop, 500);
}
