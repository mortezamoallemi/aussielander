function nightcliff_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3853;
var increase = Math.round(passed*3.34576182409174e-13*population);
document.getElementById("nightcliff_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nightcliff_livepop, 500);
}
