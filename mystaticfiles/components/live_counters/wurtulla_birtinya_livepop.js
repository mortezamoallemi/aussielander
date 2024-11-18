function wurtulla_birtinya_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7838;
var increase = Math.round(passed*1.80454054261208e-12*population);
document.getElementById("wurtulla_birtinya_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wurtulla_birtinya_livepop, 500);
}
