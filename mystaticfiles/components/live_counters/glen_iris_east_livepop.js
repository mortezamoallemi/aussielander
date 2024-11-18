function glen_iris_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16324;
var increase = Math.round(passed*1.45003537629074e-13*population);
document.getElementById("glen_iris_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glen_iris_east_livepop, 500);
}
