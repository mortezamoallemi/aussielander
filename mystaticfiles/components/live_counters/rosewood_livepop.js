function rosewood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11807;
var increase = Math.round(passed*7.34744006516746e-14*population);
document.getElementById("rosewood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rosewood_livepop, 500);
}
