function queanbeyan_west_jerrabomberra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12642;
var increase = Math.round(passed*3.52136295965609e-14*population);
document.getElementById("queanbeyan_west_jerrabomberra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(queanbeyan_west_jerrabomberra_livepop, 500);
}
