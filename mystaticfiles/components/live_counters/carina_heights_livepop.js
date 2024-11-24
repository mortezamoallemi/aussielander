function carina_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6547;
var increase = Math.round(passed*4.37065598339522e-13*population);
document.getElementById("carina_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carina_heights_livepop, 500);
}
