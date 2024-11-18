function northern_peninsula_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2796;
var increase = Math.round(passed*1.2412200570175e-12*population);
document.getElementById("northern_peninsula_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northern_peninsula_livepop, 500);
}
