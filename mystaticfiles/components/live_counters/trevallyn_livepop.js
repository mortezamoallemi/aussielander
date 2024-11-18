function trevallyn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4561;
var increase = Math.round(passed*-1.07540132166687e-13*population);
document.getElementById("trevallyn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(trevallyn_livepop, 500);
}
