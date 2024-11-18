function howard_springs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6979;
var increase = Math.round(passed*3.07282599264885e-12*population);
document.getElementById("howard_springs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(howard_springs_livepop, 500);
}
