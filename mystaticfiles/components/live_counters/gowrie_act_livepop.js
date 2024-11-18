function gowrie_act_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3055;
var increase = Math.round(passed*-3.10627154715065e-14*population);
document.getElementById("gowrie_act_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gowrie_act_livepop, 500);
}
