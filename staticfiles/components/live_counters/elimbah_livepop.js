function elimbah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3962;
var increase = Math.round(passed*3.96294964842086e-13*population);
document.getElementById("elimbah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(elimbah_livepop, 500);
}
