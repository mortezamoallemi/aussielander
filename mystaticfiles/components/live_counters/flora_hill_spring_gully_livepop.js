function flora_hill_spring_gully_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9295;
var increase = Math.round(passed*7.20489903970803e-14*population);
document.getElementById("flora_hill_spring_gully_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(flora_hill_spring_gully_livepop, 500);
}
