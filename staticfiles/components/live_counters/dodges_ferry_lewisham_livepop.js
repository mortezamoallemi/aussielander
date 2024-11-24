function dodges_ferry_lewisham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7534;
var increase = Math.round(passed*3.91479975255985e-13*population);
document.getElementById("dodges_ferry_lewisham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dodges_ferry_lewisham_livepop, 500);
}
