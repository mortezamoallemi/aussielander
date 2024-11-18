function robertson_fitzroy_falls_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3506;
var increase = Math.round(passed*2.45264018388696e-13*population);
document.getElementById("robertson_fitzroy_falls_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(robertson_fitzroy_falls_livepop, 500);
}
