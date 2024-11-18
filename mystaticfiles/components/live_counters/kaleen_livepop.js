function kaleen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7270;
var increase = Math.round(passed*-3.6533121552644e-14*population);
document.getElementById("kaleen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kaleen_livepop, 500);
}
