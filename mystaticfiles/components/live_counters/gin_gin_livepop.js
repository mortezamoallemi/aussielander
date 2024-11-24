function gin_gin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5115;
var increase = Math.round(passed*6.10467264339575e-14*population);
document.getElementById("gin_gin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gin_gin_livepop, 500);
}
