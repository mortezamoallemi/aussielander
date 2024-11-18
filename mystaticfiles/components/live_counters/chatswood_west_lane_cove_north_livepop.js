function chatswood_west_lane_cove_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20857;
var increase = Math.round(passed*8.91444403314492e-13*population);
document.getElementById("chatswood_west_lane_cove_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chatswood_west_lane_cove_north_livepop, 500);
}
