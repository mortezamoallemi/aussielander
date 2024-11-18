function maryborough_qld_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18240;
var increase = Math.round(passed*2.1942706844391e-14*population);
document.getElementById("maryborough_qld_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maryborough_qld_livepop, 500);
}
