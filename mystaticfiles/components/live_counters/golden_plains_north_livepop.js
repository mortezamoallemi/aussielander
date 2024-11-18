function golden_plains_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4483;
var increase = Math.round(passed*6.26986405816474e-13*population);
document.getElementById("golden_plains_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(golden_plains_north_livepop, 500);
}
