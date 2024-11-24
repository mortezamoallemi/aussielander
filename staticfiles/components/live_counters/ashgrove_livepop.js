function ashgrove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13313;
var increase = Math.round(passed*1.92488425304263e-13*population);
document.getElementById("ashgrove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ashgrove_livepop, 500);
}
