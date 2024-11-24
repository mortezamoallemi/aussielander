function narromine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6537;
var increase = Math.round(passed*-1.3818703902047e-13*population);
document.getElementById("narromine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narromine_livepop, 500);
}
