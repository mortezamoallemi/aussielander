function evans_head_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5219;
var increase = Math.round(passed*2.85834118356012e-13*population);
document.getElementById("evans_head_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(evans_head_livepop, 500);
}
