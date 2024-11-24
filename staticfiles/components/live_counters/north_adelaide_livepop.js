function north_adelaide_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6953;
var increase = Math.round(passed*2.55927699108435e-13*population);
document.getElementById("north_adelaide_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_adelaide_livepop, 500);
}
