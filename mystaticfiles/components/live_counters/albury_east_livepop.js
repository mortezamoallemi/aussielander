function albury_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15047;
var increase = Math.round(passed*1.02323006167715e-12*population);
document.getElementById("albury_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albury_east_livepop, 500);
}
