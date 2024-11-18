function korumburra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9119;
var increase = Math.round(passed*2.65588790467802e-13*population);
document.getElementById("korumburra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(korumburra_livepop, 500);
}
