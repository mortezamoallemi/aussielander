function burpengary_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3967;
var increase = Math.round(passed*4.86613107174399e-13*population);
document.getElementById("burpengary_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burpengary_east_livepop, 500);
}
