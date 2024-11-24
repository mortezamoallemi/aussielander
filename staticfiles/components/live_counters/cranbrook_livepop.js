function cranbrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5913;
var increase = Math.round(passed*-2.46136739511539e-13*population);
document.getElementById("cranbrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cranbrook_livepop, 500);
}
