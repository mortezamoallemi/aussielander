function kingscliff_fingal_head_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13150;
var increase = Math.round(passed*1.17443536298304e-12*population);
document.getElementById("kingscliff_fingal_head_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingscliff_fingal_head_livepop, 500);
}
