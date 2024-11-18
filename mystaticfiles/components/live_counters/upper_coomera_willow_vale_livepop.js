function upper_coomera_willow_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 31216;
var increase = Math.round(passed*1.68806474918889e-12*population);
document.getElementById("upper_coomera_willow_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(upper_coomera_willow_vale_livepop, 500);
}
