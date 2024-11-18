function noosaville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8734;
var increase = Math.round(passed*7.72805008354165e-13*population);
document.getElementById("noosaville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(noosaville_livepop, 500);
}
