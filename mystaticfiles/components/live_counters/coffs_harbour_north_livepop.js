function coffs_harbour_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17464;
var increase = Math.round(passed*4.21125940418107e-13*population);
document.getElementById("coffs_harbour_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coffs_harbour_north_livepop, 500);
}
