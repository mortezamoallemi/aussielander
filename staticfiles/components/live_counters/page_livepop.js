function page_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3023;
var increase = Math.round(passed*3.1173330372999e-13*population);
document.getElementById("page_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(page_livepop, 500);
}
