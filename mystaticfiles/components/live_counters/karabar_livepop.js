function karabar_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8241;
var increase = Math.round(passed*-2.71899027018633e-13*population);
document.getElementById("karabar_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(karabar_livepop, 500);
}
