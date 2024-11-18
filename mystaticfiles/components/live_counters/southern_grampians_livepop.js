function southern_grampians_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6073;
var increase = Math.round(passed*-2.80866855331839e-13*population);
document.getElementById("southern_grampians_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(southern_grampians_livepop, 500);
}
