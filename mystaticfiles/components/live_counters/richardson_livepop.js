function richardson_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3008;
var increase = Math.round(passed*-2.58216678605158e-13*population);
document.getElementById("richardson_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(richardson_livepop, 500);
}
