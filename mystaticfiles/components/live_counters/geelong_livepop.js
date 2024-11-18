function geelong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 247458;
var increase = Math.round(passed*2.25362441161295e-12*population);
document.getElementById("geelong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(geelong_livepop, 500);
}
