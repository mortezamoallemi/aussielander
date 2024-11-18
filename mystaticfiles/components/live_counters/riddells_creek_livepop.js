function riddells_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4006;
var increase = Math.round(passed*4.15424949896297e-13*population);
document.getElementById("riddells_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(riddells_creek_livepop, 500);
}
