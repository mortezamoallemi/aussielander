function tamworth_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20372;
var increase = Math.round(passed*1.48028791409106e-13*population);
document.getElementById("tamworth_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tamworth_east_livepop, 500);
}
