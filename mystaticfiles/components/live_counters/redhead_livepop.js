function redhead_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3517;
var increase = Math.round(passed*1.03626106178415e-13*population);
document.getElementById("redhead_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(redhead_livepop, 500);
}
