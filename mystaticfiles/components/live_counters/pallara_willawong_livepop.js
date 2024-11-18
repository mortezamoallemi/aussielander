function pallara_willawong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4701;
var increase = Math.round(passed*1.36946395686302e-12*population);
document.getElementById("pallara_willawong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pallara_willawong_livepop, 500);
}
