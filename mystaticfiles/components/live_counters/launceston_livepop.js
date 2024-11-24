function launceston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 84150;
var increase = Math.round(passed*1.46994003558942e-13*population);
document.getElementById("launceston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(launceston_livepop, 500);
}
