function fawkner_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13766;
var increase = Math.round(passed*5.63811987389643e-13*population);
document.getElementById("fawkner_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fawkner_livepop, 500);
}
