function mayfield_warabrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14873;
var increase = Math.round(passed*9.88399482327541e-14*population);
document.getElementById("mayfield_warabrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mayfield_warabrook_livepop, 500);
}
