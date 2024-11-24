function beacon_hill_narraweena_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13882;
var increase = Math.round(passed*3.95853107219568e-13*population);
document.getElementById("beacon_hill_narraweena_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beacon_hill_narraweena_livepop, 500);
}
