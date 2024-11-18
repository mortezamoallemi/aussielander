function towong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5953;
var increase = Math.round(passed*9.66126090130323e-14*population);
document.getElementById("towong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(towong_livepop, 500);
}
