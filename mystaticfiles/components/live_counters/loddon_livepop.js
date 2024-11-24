function loddon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7058;
var increase = Math.round(passed*2.79163688674383e-14*population);
document.getElementById("loddon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(loddon_livepop, 500);
}
