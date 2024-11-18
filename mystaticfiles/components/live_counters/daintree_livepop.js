function daintree_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6350;
var increase = Math.round(passed*3.50053700867639e-13*population);
document.getElementById("daintree_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(daintree_livepop, 500);
}
