function coffs_harbour_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10294;
var increase = Math.round(passed*3.00898176814931e-13*population);
document.getElementById("coffs_harbour_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coffs_harbour_south_livepop, 500);
}
