function macgregor_act_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6794;
var increase = Math.round(passed*1.3353930055007e-12*population);
document.getElementById("macgregor_act_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(macgregor_act_livepop, 500);
}
