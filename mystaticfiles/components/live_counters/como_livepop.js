function como_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14014;
var increase = Math.round(passed*2.84606498236118e-13*population);
document.getElementById("como_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(como_livepop, 500);
}
