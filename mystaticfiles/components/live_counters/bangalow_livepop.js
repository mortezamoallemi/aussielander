function bangalow_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5670;
var increase = Math.round(passed*4.05275253548201e-13*population);
document.getElementById("bangalow_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bangalow_livepop, 500);
}
