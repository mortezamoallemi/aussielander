function monterey_brighton_le_sands_kyeemagh_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13972;
var increase = Math.round(passed*3.95154573546397e-13*population);
document.getElementById("monterey_brighton_le_sands_kyeemagh_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(monterey_brighton_le_sands_kyeemagh_livepop, 500);
}
