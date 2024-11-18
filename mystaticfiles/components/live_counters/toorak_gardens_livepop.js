function toorak_gardens_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15788;
var increase = Math.round(passed*2.04096593497138e-13*population);
document.getElementById("toorak_gardens_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toorak_gardens_livepop, 500);
}
