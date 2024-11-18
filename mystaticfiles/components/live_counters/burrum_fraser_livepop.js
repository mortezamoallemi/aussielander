function burrum_fraser_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9570;
var increase = Math.round(passed*6.3367886155834e-13*population);
document.getElementById("burrum_fraser_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burrum_fraser_livepop, 500);
}
