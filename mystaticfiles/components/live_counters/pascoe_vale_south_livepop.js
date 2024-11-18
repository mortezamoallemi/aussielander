function pascoe_vale_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9956;
var increase = Math.round(passed*2.76672631594728e-13*population);
document.getElementById("pascoe_vale_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pascoe_vale_south_livepop, 500);
}
