function woodcroft_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11375;
var increase = Math.round(passed*1.70078300584973e-13*population);
document.getElementById("woodcroft_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woodcroft_livepop, 500);
}
