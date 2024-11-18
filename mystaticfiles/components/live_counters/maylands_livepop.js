function maylands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12714;
var increase = Math.round(passed*1.83705714474504e-13*population);
document.getElementById("maylands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maylands_livepop, 500);
}
