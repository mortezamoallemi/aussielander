function moree_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8203;
var increase = Math.round(passed*-1.48240475525199e-13*population);
document.getElementById("moree_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moree_livepop, 500);
}
