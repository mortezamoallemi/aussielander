function far_central_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2117;
var increase = Math.round(passed*-9.16121544344575e-13*population);
document.getElementById("far_central_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(far_central_west_livepop, 500);
}
