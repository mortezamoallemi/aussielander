function algester_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8432;
var increase = Math.round(passed*1.27633561527581e-13*population);
document.getElementById("algester_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(algester_livepop, 500);
}
