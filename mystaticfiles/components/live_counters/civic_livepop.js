function civic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4275;
var increase = Math.round(passed*2.63181096599043e-12*population);
document.getElementById("civic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(civic_livepop, 500);
}
