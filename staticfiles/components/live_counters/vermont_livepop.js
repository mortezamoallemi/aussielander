function vermont_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10447;
var increase = Math.round(passed*3.39149634171774e-13*population);
document.getElementById("vermont_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(vermont_livepop, 500);
}