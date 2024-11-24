function pascoe_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23447;
var increase = Math.round(passed*8.02531020085656e-13*population);
document.getElementById("pascoe_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pascoe_vale_livepop, 500);
}
