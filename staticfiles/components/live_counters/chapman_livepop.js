function chapman_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2687;
var increase = Math.round(passed*-8.20749276758002e-14*population);
document.getElementById("chapman_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chapman_livepop, 500);
}
