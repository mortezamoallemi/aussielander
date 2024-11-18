function kyogle_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7312;
var increase = Math.round(passed*-1.67759288257315e-13*population);
document.getElementById("kyogle_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kyogle_livepop, 500);
}
