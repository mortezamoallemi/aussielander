function bohle_plains_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7235;
var increase = Math.round(passed*1.72963457139167e-12*population);
document.getElementById("bohle_plains_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bohle_plains_livepop, 500);
}
