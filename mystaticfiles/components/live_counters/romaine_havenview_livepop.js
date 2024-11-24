function romaine_havenview_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3401;
var increase = Math.round(passed*-1.83784474552703e-13*population);
document.getElementById("romaine_havenview_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(romaine_havenview_livepop, 500);
}
