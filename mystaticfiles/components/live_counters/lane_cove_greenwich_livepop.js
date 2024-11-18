function lane_cove_greenwich_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26733;
var increase = Math.round(passed*6.45222022570941e-13*population);
document.getElementById("lane_cove_greenwich_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lane_cove_greenwich_livepop, 500);
}
