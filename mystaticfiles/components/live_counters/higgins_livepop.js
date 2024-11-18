function higgins_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3069;
var increase = Math.round(passed*-4.7351313340794e-14*population);
document.getElementById("higgins_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(higgins_livepop, 500);
}
