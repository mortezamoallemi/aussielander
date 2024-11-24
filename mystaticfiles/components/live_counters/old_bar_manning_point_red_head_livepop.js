function old_bar_manning_point_red_head_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10531;
var increase = Math.round(passed*6.14819813815916e-13*population);
document.getElementById("old_bar_manning_point_red_head_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(old_bar_manning_point_red_head_livepop, 500);
}
