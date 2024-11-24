function budgewoi_buff_point_halekulani_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9405;
var increase = Math.round(passed*3.01742624195427e-13*population);
document.getElementById("budgewoi_buff_point_halekulani_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(budgewoi_buff_point_halekulani_livepop, 500);
}
