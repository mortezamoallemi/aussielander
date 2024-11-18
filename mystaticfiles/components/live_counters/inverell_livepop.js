function inverell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11660;
var increase = Math.round(passed*1.4357273381345e-13*population);
document.getElementById("inverell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(inverell_livepop, 500);
}
