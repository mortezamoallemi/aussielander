function cootamundra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7566;
var increase = Math.round(passed*1.02244165873067e-13*population);
document.getElementById("cootamundra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cootamundra_livepop, 500);
}
