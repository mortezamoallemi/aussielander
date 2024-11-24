function acton_upper_burnie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3165;
var increase = Math.round(passed*-2.76420242279889e-13*population);
document.getElementById("acton_upper_burnie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(acton_upper_burnie_livepop, 500);
}
