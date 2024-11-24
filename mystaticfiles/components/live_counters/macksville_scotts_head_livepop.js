function macksville_scotts_head_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4792;
var increase = Math.round(passed*2.00324402431276e-13*population);
document.getElementById("macksville_scotts_head_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(macksville_scotts_head_livepop, 500);
}
