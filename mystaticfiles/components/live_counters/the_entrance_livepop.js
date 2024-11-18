function the_entrance_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14942;
var increase = Math.round(passed*4.18871846502046e-13*population);
document.getElementById("the_entrance_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(the_entrance_livepop, 500);
}
