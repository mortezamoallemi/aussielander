function camden_ellis_lane_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12963;
var increase = Math.round(passed*4.19125546028664e-13*population);
document.getElementById("camden_ellis_lane_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(camden_ellis_lane_livepop, 500);
}
