function arncliffe_bardwell_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21443;
var increase = Math.round(passed*2.40693490378987e-12*population);
document.getElementById("arncliffe_bardwell_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(arncliffe_bardwell_valley_livepop, 500);
}
