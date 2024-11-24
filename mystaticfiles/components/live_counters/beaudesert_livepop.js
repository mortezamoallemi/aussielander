function beaudesert_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13917;
var increase = Math.round(passed*7.42704375241267e-13*population);
document.getElementById("beaudesert_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beaudesert_livepop, 500);
}
