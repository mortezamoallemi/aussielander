function walkerston_eton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8324;
var increase = Math.round(passed*-6.14146266437781e-14*population);
document.getElementById("walkerston_eton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(walkerston_eton_livepop, 500);
}
