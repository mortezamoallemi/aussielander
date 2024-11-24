function karalee_barellan_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5507;
var increase = Math.round(passed*8.84637232734148e-13*population);
document.getElementById("karalee_barellan_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(karalee_barellan_point_livepop, 500);
}
