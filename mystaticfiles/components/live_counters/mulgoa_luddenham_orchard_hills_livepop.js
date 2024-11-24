function mulgoa_luddenham_orchard_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9541;
var increase = Math.round(passed*2.41648098271397e-12*population);
document.getElementById("mulgoa_luddenham_orchard_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mulgoa_luddenham_orchard_hills_livepop, 500);
}
