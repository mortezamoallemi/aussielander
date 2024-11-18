function kimba_cleve_franklin_harbour_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4244;
var increase = Math.round(passed*-1.04517289758777e-14*population);
document.getElementById("kimba_cleve_franklin_harbour_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kimba_cleve_franklin_harbour_livepop, 500);
}
