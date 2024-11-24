function glen_waverley_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21085;
var increase = Math.round(passed*1.10134128418082e-13*population);
document.getElementById("glen_waverley_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glen_waverley_east_livepop, 500);
}
