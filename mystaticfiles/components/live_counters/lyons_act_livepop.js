function lyons_act_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3089;
var increase = Math.round(passed*7.74236907881068e-13*population);
document.getElementById("lyons_act_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lyons_act_livepop, 500);
}
