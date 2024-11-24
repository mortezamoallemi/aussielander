function flynn_act_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3355;
var increase = Math.round(passed*-3.69003977853964e-13*population);
document.getElementById("flynn_act_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(flynn_act_livepop, 500);
}
