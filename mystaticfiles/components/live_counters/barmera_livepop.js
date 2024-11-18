function barmera_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6503;
var increase = Math.round(passed*-2.33625746198986e-14*population);
document.getElementById("barmera_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(barmera_livepop, 500);
}
