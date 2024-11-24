function strathpine_brendale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12266;
var increase = Math.round(passed*6.18635816531523e-13*population);
document.getElementById("strathpine_brendale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(strathpine_brendale_livepop, 500);
}
