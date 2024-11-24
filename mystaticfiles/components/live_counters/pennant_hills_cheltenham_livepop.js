function pennant_hills_cheltenham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20495;
var increase = Math.round(passed*3.41688807034005e-13*population);
document.getElementById("pennant_hills_cheltenham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pennant_hills_cheltenham_livepop, 500);
}
