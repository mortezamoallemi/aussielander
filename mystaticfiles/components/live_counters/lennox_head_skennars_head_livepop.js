function lennox_head_skennars_head_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7741;
var increase = Math.round(passed*3.36477708611949e-13*population);
document.getElementById("lennox_head_skennars_head_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lennox_head_skennars_head_livepop, 500);
}
