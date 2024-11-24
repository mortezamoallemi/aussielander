function safety_bay_shoalwater_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11509;
var increase = Math.round(passed*1.51119008728739e-13*population);
document.getElementById("safety_bay_shoalwater_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(safety_bay_shoalwater_livepop, 500);
}
