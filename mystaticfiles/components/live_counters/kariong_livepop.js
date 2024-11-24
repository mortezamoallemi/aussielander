function kariong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6381;
var increase = Math.round(passed*-7.11587650145414e-14*population);
document.getElementById("kariong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kariong_livepop, 500);
}
