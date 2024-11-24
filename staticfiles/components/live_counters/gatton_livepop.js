function gatton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7431;
var increase = Math.round(passed*2.18799730980379e-13*population);
document.getElementById("gatton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gatton_livepop, 500);
}
