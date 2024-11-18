function anna_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5726;
var increase = Math.round(passed*3.35451088427291e-13*population);
document.getElementById("anna_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(anna_bay_livepop, 500);
}
