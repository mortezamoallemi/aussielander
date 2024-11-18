function coffs_harbour_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 68492;
var increase = Math.round(passed*4.06264254962816e-13*population);
document.getElementById("coffs_harbour_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coffs_harbour_livepop, 500);
}
