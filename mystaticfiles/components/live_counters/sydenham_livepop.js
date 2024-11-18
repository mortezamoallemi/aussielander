function sydenham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12008;
var increase = Math.round(passed*2.57615170282808e-13*population);
document.getElementById("sydenham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sydenham_livepop, 500);
}
