function york_beverley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5347;
var increase = Math.round(passed*4.79028553739192e-13*population);
document.getElementById("york_beverley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(york_beverley_livepop, 500);
}
