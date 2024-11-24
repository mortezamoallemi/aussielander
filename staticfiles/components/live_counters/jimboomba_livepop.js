function jimboomba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25744;
var increase = Math.round(passed*1.69506869831142e-12*population);
document.getElementById("jimboomba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(jimboomba_livepop, 500);
}
