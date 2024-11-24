function beckenham_kenwick_langford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18875;
var increase = Math.round(passed*4.39590235427068e-13*population);
document.getElementById("beckenham_kenwick_langford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beckenham_kenwick_langford_livepop, 500);
}
