function tea_gardens_hawks_nest_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5038;
var increase = Math.round(passed*7.16208657750789e-13*population);
document.getElementById("tea_gardens_hawks_nest_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tea_gardens_hawks_nest_livepop, 500);
}
