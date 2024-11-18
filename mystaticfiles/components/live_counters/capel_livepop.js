function capel_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5196;
var increase = Math.round(passed*6.51127338285793e-13*population);
document.getElementById("capel_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(capel_livepop, 500);
}
