function newnham_mayfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8988;
var increase = Math.round(passed*2.98321672191014e-13*population);
document.getElementById("newnham_mayfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newnham_mayfield_livepop, 500);
}
