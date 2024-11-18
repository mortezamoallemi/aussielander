function laverton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8903;
var increase = Math.round(passed*3.22635177054978e-12*population);
document.getElementById("laverton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(laverton_livepop, 500);
}
