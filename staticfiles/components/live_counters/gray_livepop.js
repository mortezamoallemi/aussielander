function gray_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3285;
var increase = Math.round(passed*-4.99975052545372e-14*population);
document.getElementById("gray_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gray_livepop, 500);
}
