function point_nepean_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17120;
var increase = Math.round(passed*3.78161318991314e-13*population);
document.getElementById("point_nepean_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(point_nepean_livepop, 500);
}
