function bendigo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 94384;
var increase = Math.round(passed*5.84206654730511e-13*population);
document.getElementById("bendigo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bendigo_livepop, 500);
}
