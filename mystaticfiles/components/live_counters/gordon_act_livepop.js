function gordon_act_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7610;
var increase = Math.round(passed*-1.29507975418035e-13*population);
document.getElementById("gordon_act_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gordon_act_livepop, 500);
}
