function helensburgh_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8788;
var increase = Math.round(passed*2.42734750583885e-13*population);
document.getElementById("helensburgh_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(helensburgh_livepop, 500);
}
