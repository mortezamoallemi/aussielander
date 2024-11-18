function red_hill_act_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3169;
var increase = Math.round(passed*-1.5811248083574e-13*population);
document.getElementById("red_hill_act_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(red_hill_act_livepop, 500);
}
