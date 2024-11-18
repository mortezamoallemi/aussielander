function annandale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10066;
var increase = Math.round(passed*3.87747991836665e-13*population);
document.getElementById("annandale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(annandale_livepop, 500);
}
