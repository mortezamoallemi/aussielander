function cheltenham_highett_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22271;
var increase = Math.round(passed*5.67400067341049e-13*population);
document.getElementById("cheltenham_highett_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cheltenham_highett_east_livepop, 500);
}
