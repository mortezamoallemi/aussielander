function rutherglen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3869;
var increase = Math.round(passed*2.66135204839119e-13*population);
document.getElementById("rutherglen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rutherglen_livepop, 500);
}
