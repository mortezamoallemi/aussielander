function albion_park_macquarie_pass_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14331;
var increase = Math.round(passed*3.24112195164232e-13*population);
document.getElementById("albion_park_macquarie_pass_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albion_park_macquarie_pass_livepop, 500);
}
