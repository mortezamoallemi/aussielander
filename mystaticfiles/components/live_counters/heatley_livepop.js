function heatley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4036;
var increase = Math.round(passed*-2.78220904826613e-13*population);
document.getElementById("heatley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(heatley_livepop, 500);
}
