function huskisson_vincentia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4194;
var increase = Math.round(passed*5.90707534341485e-13*population);
document.getElementById("huskisson_vincentia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(huskisson_vincentia_livepop, 500);
}
