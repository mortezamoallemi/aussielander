function airlie_whitsundays_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12932;
var increase = Math.round(passed*1.29169071006795e-12*population);
document.getElementById("airlie_whitsundays_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(airlie_whitsundays_livepop, 500);
}
