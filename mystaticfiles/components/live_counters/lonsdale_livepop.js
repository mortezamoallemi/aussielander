function lonsdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24;
var increase = Math.round(passed*-9.77617198295652e-13*population);
document.getElementById("lonsdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lonsdale_livepop, 500);
}
