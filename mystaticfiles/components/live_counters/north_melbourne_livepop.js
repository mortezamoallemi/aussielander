function north_melbourne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20634;
var increase = Math.round(passed*1.81566301289311e-12*population);
document.getElementById("north_melbourne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_melbourne_livepop, 500);
}
