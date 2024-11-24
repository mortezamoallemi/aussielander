function mornington_warrane_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4700;
var increase = Math.round(passed*1.44668977987737e-13*population);
document.getElementById("mornington_warrane_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mornington_warrane_livepop, 500);
}
