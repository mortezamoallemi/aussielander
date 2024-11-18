function clayton_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12640;
var increase = Math.round(passed*5.30875426466841e-13*population);
document.getElementById("clayton_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clayton_south_livepop, 500);
}
