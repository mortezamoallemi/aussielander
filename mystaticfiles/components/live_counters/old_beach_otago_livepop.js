function old_beach_otago_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4338;
var increase = Math.round(passed*9.57668561320132e-13*population);
document.getElementById("old_beach_otago_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(old_beach_otago_livepop, 500);
}
