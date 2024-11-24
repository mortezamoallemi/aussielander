function fairfield_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15514;
var increase = Math.round(passed*4.72128319719902e-13*population);
document.getElementById("fairfield_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fairfield_east_livepop, 500);
}
