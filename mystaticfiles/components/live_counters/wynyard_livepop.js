function wynyard_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6088;
var increase = Math.round(passed*1.01859953434785e-13*population);
document.getElementById("wynyard_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wynyard_livepop, 500);
}
