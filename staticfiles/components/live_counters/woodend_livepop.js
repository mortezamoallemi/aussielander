function woodend_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6895;
var increase = Math.round(passed*4.63554405905475e-13*population);
document.getElementById("woodend_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woodend_livepop, 500);
}
