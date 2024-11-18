function padbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8184;
var increase = Math.round(passed*-1.41006333544151e-13*population);
document.getElementById("padbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(padbury_livepop, 500);
}
