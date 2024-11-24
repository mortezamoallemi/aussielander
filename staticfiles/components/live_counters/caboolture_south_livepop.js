function caboolture_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20344;
var increase = Math.round(passed*5.65667379144533e-13*population);
document.getElementById("caboolture_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(caboolture_south_livepop, 500);
}
