function broadmeadows_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13305;
var increase = Math.round(passed*8.17434052652396e-13*population);
document.getElementById("broadmeadows_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(broadmeadows_livepop, 500);
}
