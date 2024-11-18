function echuca_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14577;
var increase = Math.round(passed*1.69752146909258e-13*population);
document.getElementById("echuca_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(echuca_livepop, 500);
}
