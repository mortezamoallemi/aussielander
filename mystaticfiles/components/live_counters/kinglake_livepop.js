function kinglake_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3846;
var increase = Math.round(passed*4.5630527259449e-13*population);
document.getElementById("kinglake_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kinglake_livepop, 500);
}
