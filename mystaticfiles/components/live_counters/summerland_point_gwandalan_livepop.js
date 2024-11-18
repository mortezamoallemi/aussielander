function summerland_point_gwandalan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5765;
var increase = Math.round(passed*4.14803400246028e-13*population);
document.getElementById("summerland_point_gwandalan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(summerland_point_gwandalan_livepop, 500);
}
