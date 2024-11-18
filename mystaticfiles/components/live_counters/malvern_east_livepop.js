function malvern_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21319;
var increase = Math.round(passed*3.83828127080317e-13*population);
document.getElementById("malvern_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(malvern_east_livepop, 500);
}
