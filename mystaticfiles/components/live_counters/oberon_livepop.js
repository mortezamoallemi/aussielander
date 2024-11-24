function oberon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4663;
var increase = Math.round(passed*2.83704288310783e-13*population);
document.getElementById("oberon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(oberon_livepop, 500);
}
