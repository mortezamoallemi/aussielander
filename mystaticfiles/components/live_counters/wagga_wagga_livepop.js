function wagga_wagga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 54413;
var increase = Math.round(passed*2.82425139240104e-13*population);
document.getElementById("wagga_wagga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wagga_wagga_livepop, 500);
}
