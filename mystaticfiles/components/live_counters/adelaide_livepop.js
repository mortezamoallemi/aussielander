function adelaide_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1277432;
var increase = Math.round(passed*4.04671312918522e-13*population);
document.getElementById("adelaide_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(adelaide_livepop, 500);
}
