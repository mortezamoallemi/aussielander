function kowen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 39;
var increase = Math.round(passed*5.07627522029023e-13*population);
document.getElementById("kowen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kowen_livepop, 500);
}
