function bacchus_marsh_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20345;
var increase = Math.round(passed*1.08122282343366e-12*population);
document.getElementById("bacchus_marsh_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bacchus_marsh_livepop, 500);
}
