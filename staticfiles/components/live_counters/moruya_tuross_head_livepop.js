function moruya_tuross_head_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7968;
var increase = Math.round(passed*2.86543777227505e-13*population);
document.getElementById("moruya_tuross_head_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moruya_tuross_head_livepop, 500);
}
