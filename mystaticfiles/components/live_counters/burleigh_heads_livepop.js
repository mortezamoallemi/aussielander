function burleigh_heads_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8769;
var increase = Math.round(passed*5.61494818318707e-13*population);
document.getElementById("burleigh_heads_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burleigh_heads_livepop, 500);
}
