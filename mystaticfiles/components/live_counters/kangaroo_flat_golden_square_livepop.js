function kangaroo_flat_golden_square_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19688;
var increase = Math.round(passed*4.25987047338469e-13*population);
document.getElementById("kangaroo_flat_golden_square_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kangaroo_flat_golden_square_livepop, 500);
}
