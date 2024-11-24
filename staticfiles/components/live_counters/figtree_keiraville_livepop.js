function figtree_keiraville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21083;
var increase = Math.round(passed*3.71332066878679e-13*population);
document.getElementById("figtree_keiraville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(figtree_keiraville_livepop, 500);
}
