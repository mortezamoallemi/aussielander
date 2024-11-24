function macquarie_park_marsfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21728;
var increase = Math.round(passed*1.02204081824479e-12*population);
document.getElementById("macquarie_park_marsfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(macquarie_park_marsfield_livepop, 500);
}
