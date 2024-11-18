function ross_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2439;
var increase = Math.round(passed*3.61119840183526e-13*population);
document.getElementById("ross_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ross_livepop, 500);
}
