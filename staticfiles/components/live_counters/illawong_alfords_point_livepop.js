function illawong_alfords_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10366;
var increase = Math.round(passed*-1.64860951082663e-13*population);
document.getElementById("illawong_alfords_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(illawong_alfords_point_livepop, 500);
}
