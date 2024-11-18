function alfredton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11658;
var increase = Math.round(passed*2.1203074740586e-12*population);
document.getElementById("alfredton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alfredton_livepop, 500);
}
