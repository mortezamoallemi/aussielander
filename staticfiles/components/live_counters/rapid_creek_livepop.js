function rapid_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3280;
var increase = Math.round(passed*1.93647735089437e-14*population);
document.getElementById("rapid_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rapid_creek_livepop, 500);
}
