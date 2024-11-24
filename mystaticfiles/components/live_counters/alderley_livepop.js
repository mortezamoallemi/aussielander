function alderley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6000;
var increase = Math.round(passed*3.47591555650653e-13*population);
document.getElementById("alderley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alderley_livepop, 500);
}
