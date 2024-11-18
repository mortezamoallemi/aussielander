function tuart_hill_joondanna_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11894;
var increase = Math.round(passed*3.42892067924124e-13*population);
document.getElementById("tuart_hill_joondanna_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tuart_hill_joondanna_livepop, 500);
}
