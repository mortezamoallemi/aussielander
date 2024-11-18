function broken_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17709;
var increase = Math.round(passed*-2.83639314771731e-13*population);
document.getElementById("broken_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(broken_hill_livepop, 500);
}
