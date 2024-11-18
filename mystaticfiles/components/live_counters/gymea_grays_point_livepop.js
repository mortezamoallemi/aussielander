function gymea_grays_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17479;
var increase = Math.round(passed*2.33558859391694e-13*population);
document.getElementById("gymea_grays_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gymea_grays_point_livepop, 500);
}
