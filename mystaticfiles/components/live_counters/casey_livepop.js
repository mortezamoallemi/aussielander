function casey_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5759;
var increase = Math.round(passed*8.57424992749345e-12*population);
document.getElementById("casey_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(casey_livepop, 500);
}
