function terrigal_north_avoca_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13345;
var increase = Math.round(passed*3.8144995481819e-13*population);
document.getElementById("terrigal_north_avoca_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(terrigal_north_avoca_livepop, 500);
}
