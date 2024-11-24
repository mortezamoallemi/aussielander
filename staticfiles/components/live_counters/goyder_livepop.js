function goyder_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4157;
var increase = Math.round(passed*-4.25738436766756e-14*population);
document.getElementById("goyder_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(goyder_livepop, 500);
}
