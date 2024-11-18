function mansfield_qld_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8725;
var increase = Math.round(passed*1.7017019404751e-13*population);
document.getElementById("mansfield_qld_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mansfield_qld_livepop, 500);
}
