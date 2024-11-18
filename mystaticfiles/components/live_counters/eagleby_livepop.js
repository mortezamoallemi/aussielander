function eagleby_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13327;
var increase = Math.round(passed*6.79994055093464e-13*population);
document.getElementById("eagleby_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eagleby_livepop, 500);
}
