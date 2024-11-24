function salisbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17609;
var increase = Math.round(passed*6.06506407374351e-13*population);
document.getElementById("salisbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(salisbury_livepop, 500);
}
