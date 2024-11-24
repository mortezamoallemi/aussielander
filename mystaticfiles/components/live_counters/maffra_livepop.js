function maffra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13867;
var increase = Math.round(passed*2.14891838431029e-13*population);
document.getElementById("maffra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maffra_livepop, 500);
}
